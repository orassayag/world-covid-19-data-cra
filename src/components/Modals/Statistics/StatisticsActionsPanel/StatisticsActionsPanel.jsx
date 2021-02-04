import './StatisticsActionsPanel.scss';

const StatisticsActionsPanel = (props) => {
  const { countriesNameIdList, statisticsUpdatesHoursCount, statisticsUpdatesCountryId, onActionChange } = props;
  const countriesListDOM = [];
  for (let i = 0; i < countriesNameIdList.length; i++) {
    const { id, displayName } = countriesNameIdList[i];
    countriesListDOM.push(
      (<option key={id} value={id}>{displayName}</option>)
    );
  }

  return (
    <div className="actions-panel">
      <div className="time-selector">
        <select data-action="select-time" data-modal-name="GlobalStatistics" value={statisticsUpdatesHoursCount} onChange={onActionChange}>
          <option value="1">1h ago</option>
          <option value="2">2h ago</option>
          <option value="3">3h ago</option>
          <option value="5">5h ago</option>
        </select>
      </div>
      <div className="country-selector">
        <select data-action="select-country" data-modal-name="GlobalStatistics" value={statisticsUpdatesCountryId} onChange={onActionChange}>
          <option value="-1">All</option>
          {countriesListDOM}
        </select>
      </div>
    </div>
  );
};

export default StatisticsActionsPanel;