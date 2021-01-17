import React, { Fragment } from 'react';
import './CountrySummaryItemTotal.scss';
import CountrySummaryItemSource from '../CountrySummaryItemSource/CountrySummaryItemSource';

const CountrySummaryItemTotal = (props) => {
  const { dataItems } = props.totalSummaryData;
  const summaryItemsTotalDOM = [];
  for (let i = 0; i < dataItems.length; i++) {
    summaryItemsTotalDOM.push((
      <CountrySummaryItemSource
        key={i}
        dataItem={dataItems[i]}
      />
    ));
  }

  return (
    <Fragment>
      <div className="delimiter"></div>
      <div className="source-item total">
        {summaryItemsTotalDOM}
      </div>
    </Fragment>
  );
};

export default CountrySummaryItemTotal;