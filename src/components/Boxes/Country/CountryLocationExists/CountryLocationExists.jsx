import React from 'react';

const CountryLocationExists = (props) => {
    const { locationClassName } = props;

    return (
        <div>
            <span className={`location night${locationClassName}`}></span>
        </div>
    );
};

export default CountryLocationExists;