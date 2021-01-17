import { textUtils } from '../../../../utils';

const StatisticsType = textUtils.createEnum([
    ['STATISTICS_SET_STATE_STATISTICS_LIST', 'statistics_set_state_statistics_list'],
    ['STATISTICS_SET_STATE_CURRENT_TIME', 'statistics_set_state_current_time'],
    ['STATISTICS_SET_STATE_STATISTICS_FIELD', 'statistics_set_state_statistics_field']
]);

export default StatisticsType;