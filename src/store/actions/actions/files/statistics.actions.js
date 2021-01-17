import { StatisticsType } from '../../types';

class StatisticsActions {

    constructor() { }

    setStateStatisticsList(statisticsList) {
        return {
            type: StatisticsType.STATISTICS_SET_STATE_STATISTICS_LIST,
            statisticsList: statisticsList
        };
    }

    setStateCurrentTime(data) {
        return {
            type: StatisticsType.STATISTICS_SET_STATE_CURRENT_TIME,
            data: data
        };
    }

    setStateStatisticsField(fieldName, fieldValue) {
        return {
            type: StatisticsType.STATISTICS_SET_STATE_STATISTICS_FIELD,
            fieldName: fieldName,
            fieldValue: fieldValue
        };
    }
}

export default new StatisticsActions();