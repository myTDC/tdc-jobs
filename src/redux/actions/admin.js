import { createAction } from "redux-starter-kit";
import { batch } from "react-redux";
import { worksV1DocRef, testRef } from "../../services/fb";
import wsv1data from "../../res/worksv1.js";

export const gettingDataWorksV1 = createAction("WORKS_FETCHING");
export const gotDataWorksV1 = createAction("WORKS_FETCH_SUCCESS");
export const gotErrorGettingDataWorksV1 = createAction("FETCHING_FAILURE");
export const settingDataWorksV1 = createAction("WORKS_ADDING");
export const setSelectedWork = createAction("WORKS_SELECTED");
export const setDataWorksV1 = createAction("WORKS_ADD_SUCCESS");
export const gotErrorSettingDataWorksV1 = createAction("ADDING_FAILURE");

export const testRead = () => {
	testRef
		.get()
		.then(doc => {
			if (doc && doc.exists) {
				console.log("Test Document has data: ", doc());
			}
		})
		.catch(error => {
			console.error("Error adding document: ", error);
		});
};

export const selectWorkshop = id => {
	return dispatch => {
		dispatch(setSelectedWork({ selectedID: id }));
	};
};

export const getDataWorksV1 = () => {
	return dispatch => {
		dispatch(gettingDataWorksV1());
		worksV1DocRef
			.get()
			.then(doc => {
				if (doc && doc.exists) {
					const incomingData = doc.data();
					console.log("Document has data: ", incomingData);
					batch(() => {
						dispatch(gotDataWorksV1({ workshops: incomingData }));
						dispatch(selectWorkshop("1"));
					});
					// dispatch({
					//   type: COMMON_FETCHING_WORKS_SUCCESS,
					//   payload: { workshops: incomingData }
					// })
				}
			})
			.catch(error => {
				console.error("Error adding document: ", error);
				dispatch(gotErrorGettingDataWorksV1({ error_code: error }));
			});
	};
};

export const listentoDataWorksV1 = () => {
	worksV1DocRef.onSnapshot(doc => {
		if (doc && doc.exists) {
			console.log("Snap has data: ", doc.data);
		}
	});
};

export const addDataWorksV1 = () => {
	return dispatch => {
		dispatch(settingDataWorksV1());
		console.log("Adding Data: ", wsv1data, " to ", worksV1DocRef);
		worksV1DocRef
			.set(wsv1data)
			.then(docRef => {
				console.log("Document written with ID: ", docRef.id);
				dispatch(setDataWorksV1());
			})
			.catch(error => {
				console.error("Error adding document: ", error);
				dispatch(gotErrorSettingDataWorksV1({ error_code: error }));
			});
	};
};