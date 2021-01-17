import React from 'react';
import './CountryName.scss';

const CountryName = (props) => {
    const { displayName, upperCode2, titleClassName } = props;

    return (
        <div className={`name${titleClassName}`}>
            <div>{displayName}{upperCode2 ? ` (${upperCode2})` : ''}</div>
        </div>
    );
};

export default CountryName;