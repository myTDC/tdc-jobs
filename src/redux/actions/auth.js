import { batch } from 'react-redux';
import { getAuthRef, gProvider, usersColRef } from '../../services/fb';

import {
	authenticatingUser,
	authenticatedUser,
	gotErrorAuthenticatingUser,
	gettingUserData,
	gotUserExists,
	gotErrorCheckingUserData,
	creatingUser,
	createdUser,
	gotErrorCreatingUser,
} from '../reducers/auth';

const setUserAccess = (user) => {
	const userWithAccess = { ...user, ...{ role: 'authenticated', access: 'regsitered' } };
	console.log('Access Specified User is', userWithAccess);
	return userWithAccess;
};

// const getUserAccess = (user) => {
// 	const userWithAccess = null;
// 	return [user, userWithAccess];
// };

const createUser = (newUser) => {
	return async (dispatch) => {
		dispatch(creatingUser());
		//TODO: add user roles and accesses
		const user = setUserAccess(newUser);
		console.log("User Doesn't Exist. Creating User with Data: ", user, ' at ', usersColRef);
		usersColRef
			.add(user)
			.then((docRef) => {
				console.log('User Created at Doc ID: ', docRef.id);
				dispatch(createdUser());
			})
			.catch((error) => {
				console.error('Error adding User document: ', error);
				dispatch(gotErrorCreatingUser({ error_code: error }));
			});
	};
};

const getUserData = (user) => {
	return (dispatch) => {
		dispatch(gettingUserData());
		usersColRef
			.where('email', '==', user.email)
			.get()
			.then((querySnapshot) => {
				if (querySnapshot) {
					querySnapshot.forEach((doc) => {
						const incomingData = doc.data();
						console.log('User Exists with id: ', doc.id, ' & has data: ', incomingData);
						dispatch(gotUserExists({ user: incomingData }));
					});
				} else {
					dispatch(createUser(user));
				}
			})
			.catch((error) => {
				console.error('Error checking user ref: ', error);
				dispatch(gotErrorCheckingUserData({ error_code: error }));
			});
	};
};

const authWithGoogle = () => {
	console.log('Starting Authentication Process');
	let curAuth = null;
	return (dispatch) => {
		dispatch(authenticatingUser()); //
		curAuth = getAuthRef();
		//console.log('SingedIn! ; AuthRef is: ', curAuth);
		curAuth
			.signInWithPopup(gProvider)
			.then((result) => {
				// console.log("SingedIn! ; Response is: ", result) // console.log("SingedIn! ; User Info: ", result.user)
				const user = {
					// The signed-in user info.\
					locale: result.additionalUserInfo.profile.locale,
					profileId: result.additionalUserInfo.profile.id,
					uid: result.user.uid,
					nameFull: result.user.displayName,
					nameGiven: result.additionalUserInfo.profile.given_name,
					nameFamily: result.additionalUserInfo.profile.family_name,
					email: result.user.email,
					phoneNo: result.user.phoneNumber,
					photoUrl: result.user.photoURL,
					emailVerified: result.user.emailVerified,
				};

				const userSessionExtras = {
					uid: result.user.uid,
					isAnonymous: result.user.isAnonymous,
					isNew: result.additionalUserInfo.isNewUser,
					refToken: result.user.refreshToken,
					token: result.credential.accessToken, // This gives you a Google Access Token. You can use it to access the Google API.
				};

				console.log('SingedIn!; User is: ', user); //const user = getAuthRef().currentUser
				batch(() => {
					dispatch(authenticatedUser({ newUser: user, sessionStuff: userSessionExtras })); //dispatch(authSuccessful(user))
					dispatch(getUserData(user)); //check user exists? getData:createUser
				});
			})
			.catch((error) => {
				const authError = {
					errorCode: error.code,
					errorMessage: error.message,
					email: error.email,
					credential: error.credential,
				};
				console.group('Auth_Error');
				console.log('Error Code: ', authError.errorCode);
				console.log('With Message: ', authError.errorMessage);
				console.log('For Email: ', authError.email); // The email of the user's account used.
				console.log('using Credential: ', authError.credential); // The firebase.auth.AuthCredential type that was used.
				console.groupEnd();
				dispatch(gotErrorAuthenticatingUser({ error: authError }));
			});
	};
};

export default authWithGoogle;