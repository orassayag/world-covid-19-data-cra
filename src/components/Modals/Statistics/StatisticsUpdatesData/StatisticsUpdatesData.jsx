import React from 'react';
import './StatisticsUpdatesData.scss';
import StatisticsUpdateItem from '../StatisticsUpdateItem/StatisticsUpdateItem';

const StatisticsUpdatesData = (props) => {
  const { statisticsUpdatesList, onActionClick } = props;
  const itemsDOM = [];
  for (let i = 0; i < statisticsUpdatesList.length; i++) {
    const update = statisticsUpdatesList[i];
    itemsDOM.push(
      (<StatisticsUpdateItem
        key={update.id}
        statisticUpdate={update}
        onActionClick={onActionClick}
      />)
    );
  }

  return (
    <div className="data">
      {itemsDOM}
    </div>
  );
};

export default StatisticsUpdatesData;