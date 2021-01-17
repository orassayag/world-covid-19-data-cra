import { StatisticsUpdatesType } from '../../types';

class StatisticsUpdatesActions {

	constructor() { }

	setStateStatisticsUpdatesList(statisticsUpdatesList) {
		return {
			type: StatisticsUpdatesType.STATISTICS_UPDATES_SET_STATE_STATISTICS_UPDATES_LIST,
			statisticsUpdatesList: statisticsUpdatesList
		};
	}

	setStateStatisticsUpdatesSettingsList(statisticsUpdatesSettingsList) {
		return {
			type: StatisticsUpdatesType.STATISTICS_UPDATES_SET_STATE_STATISTICS_UPDATES_SETTINGS_LIST,
			statisticsUpdatesSettingsList: statisticsUpdatesSettingsList
		};
	}
}

export default new StatisticsUpdatesActions();