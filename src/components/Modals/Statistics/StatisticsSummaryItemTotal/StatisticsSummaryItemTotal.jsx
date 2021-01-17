import React, { Fragment } from 'react';
import './StatisticsSummaryItemTotal.scss';
import StatisticsSummaryItemSource from '../StatisticsSummaryItemSource/StatisticsSummaryItemSource';

const StatisticsSummaryItemTotal = () => {
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
  }, {
    sourceName: 'cycle',
    iconName: 'stream',
    valueDisplay: '28'
  }, {
    sourceName: 'try-recover',
    iconName: 'tools',
    valueDisplay: '0'
  }, {
    sourceName: 'refresh',
    iconName: 'sync',
    valueDisplay: '3'
  }];

  const summaryItemsTotalDOM = [];
  for (let i = 0; i < sourceItemsList.length; i++) {
    const sourceItem = sourceItemsList[i];
    summaryItemsTotalDOM.push((
      <StatisticsSummaryItemSource
        key={i}
        sourceName={sourceItem.sourceName}
        iconName={sourceItem.iconName}
        valueDisplay={sourceItem.valueDisplay}
      />
    ));
  }

  return (
    <Fragment>
      <div className="delimiter"></div>
      <div className="source-item total">
        {summaryItemsTotalDOM.slice(0, 4)}
      </div>
      <div className="source-item total">
        {summaryItemsTotalDOM.slice(5, 8)}
      </div>
    </Fragment>
  );
};

export default StatisticsSummaryItemTotal;