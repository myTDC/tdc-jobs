import { createReducer } from "redux-starter-kit";
import {
	gettingDataWorksV1,
	gotDataWorksV1,
	gotErrorGettingDataWorksV1,
	settingDataWorksV1,
	setDataWorksV1,
	gotErrorSettingDataWorksV1,
	setSelectedWork,
} from "../actions/admin";

const initialState = {
	workshops: null,
	fetching: false,
	adding: false,
	error: false,
	error_Code: null,
	selected: null,
	selected_Id: "wv1_001",
};

const adminReducer = createReducer(initialState, {
	[gettingDataWorksV1.type]: state => {
		state.fetching = true;
	},
	[gotDataWorksV1.type]: (state, action) => {
		state.fetching = false;
		state.workshops = Object.values(action.payload.workshops);
	},
	[gotErrorGettingDataWorksV1.type]: (state, action) => {
		state.error = true;
		state.fetching = false;
		state.error_Code = action.payload.error_code;
	},
	[settingDataWorksV1.type]: state => {
		state.adding = true;
	},
	[setDataWorksV1.type]: state => {
		state.adding = false;
	},
	[gotErrorSettingDataWorksV1.type]: (state, action) => {
		state.error = true;
		state.adding = false;
		state.error_Code = action.payload.error_code;
	},
	[setSelectedWork.type]: (state, action) => {
		state.selected_Id = action.payload.selectedID;
		// let selectWS = ;
		state.selected = {
			...state.workshops.filter(works => works.id === state.selected_Id)[0],
		};
	},
});

export default adminReducer;
