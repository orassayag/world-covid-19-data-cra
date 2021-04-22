import { DataType } from '../../actions/types';
import { coreUtils } from '../../../utils';

class DataReducers {

	constructor() {
		this.initialState = {
			sourcesList: [],
			countriesList: [],
			countriesNameIdList: []
		};
	}

	setStateDataCollection = (state, action) => {
		const { collectionName, collectionValue } = action;
		const updatedState = {
			...state,
			[collectionName]: collectionValue instanceof Array ? collectionValue : Object.values(collectionValue)
		};
		return coreUtils.updateObject(state, updatedState);
	};

	getDataReducer = (state = this.initialState, action) => {
		switch (action.type) {
			case DataType.DATA_SET_STATE_DATA_COLLECTION: {
				return this.setStateDataCollection(state, action);
			}
		}
		return state;
	};
}

export default new DataReducers();