import { StatisticsUpdatesType } from '../../actions/types';
import { statisticUpdateService } from '../../../services';
import { coreUtils } from '../../../utils';

class StatisticsUpdatesReducers {

	constructor() {
		this.initialState = {
			statisticsUpdatesList: [],
			statisticsUpdatesSettingsList: statisticUpdateService.initateStatisticsUpdatesSettingsList()
		};
	}

	setStateStatisticsUpdatesList(state, action) {
		const updatedState = {
			...state,
			statisticsUpdatesList: [...action.statisticsUpdatesList]
		};
		return coreUtils.updateObject(state, updatedState);
	}

	setStateStatisticsUpdatesSettingsList(state, action) {
		const updatedState = {
			...state,
			statisticsUpdatesSettingsList: {
				...state.statisticsUpdatesSettingsList,
				...action.statisticsUpdatesSettingsList
			}
		};
		return coreUtils.updateObject(state, updatedState);
	}

	getStatisticsUpdatesReducer = (state = this.initialState, action) => {
		switch (action.type) {
			case StatisticsUpdatesType.STATISTICS_UPDATES_SET_STATE_STATISTICS_UPDATES_LIST:
				{ return this.setStateStatisticsUpdatesList(state, action); }
			case StatisticsUpdatesType.STATISTICS_UPDATES_SET_STATE_STATISTICS_UPDATES_SETTINGS_LIST:
				{ return this.setStateStatisticsUpdatesSettingsList(state, action); }
		}
		return state;
	}
}

export default new StatisticsUpdatesReducers();