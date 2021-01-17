import React from 'react';
import './CountrySummaryItem.scss';
import CountrySummaryItemSource from '../CountrySummaryItemSource/CountrySummaryItemSource';
import CountrySummaryItemStatus from '../CountrySummaryItemStatus/CountrySummaryItemStatus';

const CountrySummaryItem = (props) => {
  const { sourceName, sourceSummaryData } = props;
  const { itemClassName, dataItems } = sourceSummaryData;
  const summaryItemsDOM = [];
  for (let i = 0; i < dataItems.length; i++) {
    summaryItemsDOM.push((
      <CountrySummaryItemSource
        key={i}
        dataItem={dataItems[i]}
      />
    ));
  }

  return (
    <div className={`source-item${itemClassName}`}>
      <CountrySummaryItemStatus
        sourceName={sourceName}
      />
      {summaryItemsDOM}
    </div>
  );
};

export default CountrySummaryItem;