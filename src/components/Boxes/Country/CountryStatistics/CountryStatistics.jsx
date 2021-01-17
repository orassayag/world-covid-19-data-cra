import React from 'react';
import './CountryStatistics.scss';
import CountryStatisticsItem from '../CountryStatisticsItem/CountryStatisticsItem';

const CountryStatistics = (props) => {
    const { statisticsData } = props;
    const statisticsDOM = [];
    for (let i = 0; i < statisticsData.length; i++) {
        statisticsDOM.push(
            (<CountryStatisticsItem
                key={i}
                statisticsDataItem={statisticsData[i]}
            />)
        );
    }

    return (
        <div className="statistics">
            {statisticsDOM}
        </div>
    );
};

export default CountryStatistics;