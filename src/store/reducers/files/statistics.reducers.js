import { StatisticsType } from '../../actions/types';
import { statisticService } from '../../../services';
import { coreUtils } from '../../../utils';

class StatisticsReducers {

	constructor() {
		this.initialState = {
			...statisticService.initiateSinglesList(),
			statisticsList: []
		};
	}

	setStateStatisticsList(state, action) {
		const updatedState = {
			...state,
			statisticsList: {
				...state.statisticsList,
				...action.statisticsList
			}
		};
		return coreUtils.updateObject(state, updatedState);
	}

	setStateCurrentTime(state, action) {
		const { currentTime, lastUpdateDateDisplay } = action.data;
		const updatedState = {
			...state,
			currentTime: currentTime,
			lastUpdateDateDisplay: lastUpdateDateDisplay
		};
		return coreUtils.updateObject(state, updatedState);
	}

	setStateStatisticsField(state, action) {
		const { fieldName, fieldValue } = action;
		const updatedState = {
			...state,
			[fieldName]: fieldValue
		};
		return coreUtils.updateObject(state, updatedState);
	}

	getStatisticsReducer = (state = this.initialState, action) => {
		switch (action.type) {
			case StatisticsType.STATISTICS_SET_STATE_STATISTICS_LIST: {
				return this.setStateStatisticsList(state, action);
			}
			case StatisticsType.STATISTICS_SET_STATE_CURRENT_TIME: {
				return this.setStateCurrentTime(state, action);
			}
			case StatisticsType.STATISTICS_SET_STATE_STATISTICS_FIELD: {
				return this.setStateStatisticsField(state, action);
			}
		}
		return state;
	}
}

export default new StatisticsReducers();