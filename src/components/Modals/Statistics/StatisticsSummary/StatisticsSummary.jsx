import React from 'react';
import './StatisticsSummary.scss';
import StatisticsSummarySources from '../StatisticsSummarySources/StatisticsSummarySources';
import StatisticsSummaryTop from '../StatisticsSummaryTop/StatisticsSummaryTop';

const StatisticsSummary = () => {

  return (
    <div className="summary">
      <div className="title">
        Statistics
      </div>
      <div className="data">
        <StatisticsSummaryTop
        />
      </div>
      <StatisticsSummarySources
      />
    </div>
  );
};

export default StatisticsSummary;