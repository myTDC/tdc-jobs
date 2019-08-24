import firebase from "@firebase/app"
import "@firebase/auth"
import "@firebase/firestore"
import "@firebase/storage"
import "@firebase/messaging"

const firebaseConfig = {
  apiKey: "AIzaSyAd1jN8Prw4bUDCMvFN0QGZy0WRqEq8K1k",
  authDomain: "tdc-workshsops.firebaseapp.com",
  databaseURL: "https://tdc-workshsops.firebaseio.com",
  projectId: "tdc-workshsops",
  storageBucket: "tdc-workshsops.appspot.com",
  messagingSenderId: "115568196506",
}

// export const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTHDOM,
//   databaseURL: process.env.REACT_APP_DBURL,
//   projectId: process.env.REACT_APP_PROJID,
//   storageBucket: process.env.REACT_APP_SBUCKET,
//   messagingSenderId: process.env.REACT_APP_MSGSNDR,
// }

const app = firebase.initializeApp(firebaseConfig)

/* #### User Authentication Related Code #### */
export const getAuthRef = () => {
  return app.auth()
}

// export const authRef = app.auth()
export const gProvider = new firebase.auth.GoogleAuthProvider()

/** Function to get the detials of the user that's currently logged in*/
export const getUser = () => {
  return firebase.auth().currentUser
}

/* ---- End of User Authentication Related Code ---- */

/* #### FireStore DB Related Code #### */
const db = firebase.firestore()

export const testRef = db.doc("test/test01")
export const worksV1DocRef = db.doc("workshops/v1")
export const usersColRef = db.collection("users")
export const feedbackColRef = db.collection("feedback")

/* ---- End of FireStore DB Related Code ---- */

export default app
// let firebaseCache = firebase.initializeApp(firebaseConfig);

// const getFbRef = () => {
// 	if (firebaseCache) return firebaseCache
// 	firebase.initializeApp(firebaseConfig);
// 	firebaseCache = firebase;
// 	return firebaseCache
// }

// /* ################ cloud Firestore Refs and Functions ################ */
// const fs = getFbRef().firestore();

// const userColRef = fs.collection("users");
// export const getUserDocRef = uID => {
// 	return userColRef.doc(uID);
// };

// export const getDocRef = url_path => {
// 	return fs.doc(url_path);
// };

// /* ################ FB Auth Refs and Functions ################ */
// export const getAuthRef = () => {
// 	// firebase.initializeApp(firebaseConfig);
// 	return getFbRef().auth().useDeviceLanguage();
// }

// export const authRef = getFbRef().auth().useDeviceLanguage();
// export const gProvider = new firebase.auth.GoogleAuthProvider();
// // export const authRef = firebase
// // 	.auth()
// // 	.signInWithRedirect(provider)
// // 	.useDeviceLanguage();

// /* ################ FB Realtime Database Refs and Functions ################ */
// export const dbRef = getFbRef().database().ref();

// // System related database references
// export const booksRef = dbRef.child("books");
// export const testsRef = dbRef.child("tests");

// // User related Database references
// export const usersRef = dbRef.child("users");

// // Method to get the data with the current userID
// export const getUserRef = uID => {
// 	return dbRef.child(`users/${uID}`);
// };

/* ################ FB Storage Refs and Functions ################ */

/* ################ FB Messaging Refs and Functions ################ */
// export const pushRef = firebase.messaging();

/* ################ End of File and Default Export ################ */
// export default firebase;
// export default (firebaseCache || firebase);

/*
	In firestore things start with a collection.
	each collection contains only documents. Collections simply can't containt any key-val pairs.
	each document stores key-value pairs (or Fields) ie objData or sub-collections and so on.
	when querying back only shallow queries are returned. as in only the immediate documents shall be returned
*/
// const test_uID = "sasds13312";
// const test_uName = "JohnathanDoe"
// const userpifsDocRef = getDocRef("users/" + test_uID + "/personaldata/" + test_uName);
// userpifsDocRef
// 	.set({
// 		userName: test_uName
// 	})
// 	.then(success => {
// 		console.log("FS write Successful. Status:", success);
// 	})
// 	.catch(err => {
// 		console.log("FS write returned an error. Here goes nufink:", err);
// 	});

// export const getRTUpdates = () => {
// 	userpifsDocRef.onSnapshot(doc => {
// 		if (doc && doc.exists) return doc.data();
// 	});
// };
