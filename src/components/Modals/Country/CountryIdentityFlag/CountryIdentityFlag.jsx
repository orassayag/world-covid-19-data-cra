import React from 'react';
import './CountryIdentityFlag.scss';

const CountryIdentityFlag = (props) => {
  const { bigFlagClassName } = props;

  return (
    <div className="flag-container">
      <div className={`big-flag ${bigFlagClassName}`}></div>
    </div>
  );
};

export default CountryIdentityFlag;