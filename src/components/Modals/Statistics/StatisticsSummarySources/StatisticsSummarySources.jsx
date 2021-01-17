import React from 'react';
import './StatisticsSummarySources.scss';
import StatisticsSummaryItem from '../StatisticsSummaryItem/StatisticsSummaryItem';
import StatisticsSummaryItemTotal from '../StatisticsSummaryItemTotal/StatisticsSummaryItemTotal';

const StatisticsSummarySources = () => {

  return (
    <div className="statistics-sources">
      <StatisticsSummaryItem
        sourceName="POP1"
        sourceStatusIconName="check-circle"
        isPopulation={true}
      />
      <StatisticsSummaryItem
        sourceName="POP2"
        sourceStatusIconName="check-circle"
        isPopulation={true}
      />
      <StatisticsSummaryItem
        sourceName="GOO"
        sourceStatusIconName="check-circle"
        isPopulation={false}
      />
      <StatisticsSummaryItem
        sourceName="WOD"
        sourceStatusIconName="check-circle"
        isPopulation={false}
      />
      <StatisticsSummaryItem
        sourceName="CVA"
        sourceStatusIconName="check-circle"
        isPopulation={false}
      />
      <StatisticsSummaryItem
        sourceName="COA"
        sourceStatusIconName="check-circle"
        isPopulation={false}
      />
      <StatisticsSummaryItem
        sourceName="WIK"
        sourceStatusIconName="exclamation-circle"
        isPopulation={false}
      />
      <StatisticsSummaryItem
        sourceName="CAC"
        sourceStatusIconName="check-circle"
        isPopulation={false}
      />
      <StatisticsSummaryItem
        sourceName="CVS"
        sourceStatusIconName="check-circle"
        sourceNameClass=""
      />
      <StatisticsSummaryItem
        sourceName="CLN"
        sourceStatusIconName="dot-circle"
        sourceNameClass=""
      />
      <StatisticsSummaryItemTotal
      />
    </div>
  );
};

export default StatisticsSummarySources;