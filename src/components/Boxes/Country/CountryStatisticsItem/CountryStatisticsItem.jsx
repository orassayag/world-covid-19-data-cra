import React from 'react';
import './CountryStatisticsItem.scss';
import { Icon } from '../../../UI';

const CountryStatisticsItem = (props) => {
    const { value, iconName } = props.statisticsDataItem;

    return (
        <div className="item">
            <div className="icon">
                <Icon
                    name={iconName}
                />
            </div>
            <div className="number">
                {value}
            </div>
        </div>
    );
};

export default CountryStatisticsItem;