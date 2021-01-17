import { SettingsType } from '../../actions/types';
import { settingService } from '../../../services';
import { coreUtils } from '../../../utils';

class SettingsReducers {

	constructor() {
		this.initialState = {
			settingsList: settingService.initiateStateSettingsList(),
			loadingList: settingService.initiateStateLoadingList()
		};
	}

	setStateSettingsList(state, action) {
		const { listName, listValues } = action;
		const updatedState = {
			...state,
			[listName]: {
				...state[listName],
				...listValues
			}
		};
		return coreUtils.updateObject(state, updatedState);
	}

	getSettingsReducer = (state = this.initialState, action) => {
		switch (action.type) {
			case SettingsType.SETTINGS_SET_STATE_SETTINGS_LIST:
				{ return this.setStateSettingsList(state, action); }
		}
		return state;
	}
}

export default new SettingsReducers();