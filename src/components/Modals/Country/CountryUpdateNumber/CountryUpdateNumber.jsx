import React from 'react';
import './CountryUpdateNumber.scss';

const CountryUpdateNumber = (props) => {
    const { iconName, updateType, countDisplay } = props.dataItem;

    return (
        <div className={iconName}>
            {updateType}{countDisplay}
        </div>
    );
};

export default CountryUpdateNumber;