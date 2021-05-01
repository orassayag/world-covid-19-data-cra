import StatisticsExitButton from '../StatisticsExitButton/StatisticsExitButton';
import StatisticsOkButton from '../StatisticsOkButton/StatisticsOkButton';
import StatisticsSummary from '../StatisticsSummary/StatisticsSummary';
import StatisticsUpdates from '../StatisticsUpdates/StatisticsUpdates';

const StatisticsModal = (props) => {
  const { countriesNameIdList, statisticsUpdatesList, statisticsUpdatesHoursCount,
    statisticsUpdatesCountryId, onActionClick, onActionChange } = props;

  return (
    <div className="modal-content statistics f16 f16-extra">
      <div className="content">
        <StatisticsExitButton
          onActionClick={onActionClick}
        />
        <StatisticsUpdates
          countriesNameIdList={countriesNameIdList}
          statisticsUpdatesList={statisticsUpdatesList}
          statisticsUpdatesHoursCount={statisticsUpdatesHoursCount}
          statisticsUpdatesCountryId={statisticsUpdatesCountryId}
          onActionClick={onActionClick}
          onActionChange={onActionChange}
        />
        <StatisticsSummary />
        <StatisticsOkButton
          onActionClick={onActionClick}
        />
      </div>
    </div>
  );
};

export default StatisticsModal;