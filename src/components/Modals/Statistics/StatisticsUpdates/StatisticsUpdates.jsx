import './StatisticsUpdates.scss';
import StatisticsActionsPanel from '../StatisticsActionsPanel/StatisticsActionsPanel';
import StatisticsUpdatesData from '../StatisticsUpdatesData/StatisticsUpdatesData';
import { StatisticsUpdatesSortType } from '../../../../core/enums';
import { timeUtils } from '../../../../utils';
import { statisticUpdateService } from '../../../../services';

const StatisticsUpdates = (props) => {
  const { countriesNameIdList, statisticsUpdatesList, statisticsUpdatesHoursCount,
    statisticsUpdatesCountryId, onActionClick, onActionChange } = props;
    const dateNow = timeUtils.getCurrentDate();
  const countryIdQuery = statisticsUpdatesCountryId === -1 ? {} : { countryId: [statisticsUpdatesCountryId] };
  const displayStatisticsUpdatesList = statisticUpdateService.getStatisticsUpdatesList(statisticsUpdatesList, {
    filterOptions: {
      ...countryIdQuery,
      isVisible: [true],
      dateFieldName: 'lastUpdateDate',
      fromDate: timeUtils.subtractHours(dateNow, statisticsUpdatesHoursCount),
      toDate: dateNow
    },
    sortType: StatisticsUpdatesSortType.LAST_UPDATE_TIME
  });

  return (
    <div className="updates">
      <div className="latest-updates">
        <div className="title">
          Latest Updates
        </div>
        <StatisticsActionsPanel
          countriesNameIdList={countriesNameIdList}
          statisticsUpdatesHoursCount={statisticsUpdatesHoursCount}
          statisticsUpdatesCountryId={statisticsUpdatesCountryId}
          onActionChange={onActionChange}
        />
      </div>
      <StatisticsUpdatesData
        statisticsUpdatesList={displayStatisticsUpdatesList}
        onActionClick={onActionClick}
      />
    </div>
  );
};

export default StatisticsUpdates;