import React from 'react';
import './StatisticsSummaryItem.scss';
import StatisticsSummaryItemSource from '../StatisticsSummaryItemSource/StatisticsSummaryItemSource';
import StatisticsSummaryItemStatus from '../StatisticsSummaryItemStatus/StatisticsSummaryItemStatus';

const StatisticsSummaryItem = (props) => {
  const { sourceName, sourceStatusIconName, isPopulation } = props;
  let sourceNameClass = '';
  const summaryItemsDOM = [];
  if (isPopulation) {
    sourceNameClass = ' empty';
  }
  else {
    const sourceItemsList = [{
      sourceName: 'case',
      iconName: 'virus',
      valueDisplay: '100,273'
    }, {
      sourceName: 'death',
      iconName: 'skull-crossbones',
      valueDisplay: '100,566'
    }, {
      sourceName: 'recover',
      iconName: 'heart',
      valueDisplay: '100,348'
    }, {
      sourceName: 'update',
      iconName: 'sync-alt',
      valueDisplay: '100,000'
    }, {
      sourceName: 'last-time',
      iconName: 'clock',
      valueDisplay: '49min ago'
    }];

    for (let i = 0; i < sourceItemsList.length; i++) {
      const sourceItem = sourceItemsList[i];
      summaryItemsDOM.push((
        <StatisticsSummaryItemSource
          key={i}
          sourceName={sourceItem.sourceName}
          iconName={sourceItem.iconName}
          valueDisplay={sourceItem.valueDisplay}
        />
      ));
    }
  }

  return (
    <div className="source-item">
      <StatisticsSummaryItemStatus
        sourceName={sourceName}
        sourceStatusIconName={sourceStatusIconName}
        sourceNameClass={sourceNameClass}
      />
      {summaryItemsDOM}
    </div>
  );
};

export default StatisticsSummaryItem;