import React from 'react';
import './CountrySourceName.scss';

const CountrySourceName = (props) => {
  const { lowerName, upperName, updateSourceName } = props;

  return (
    <div className={`name${updateSourceName && updateSourceName === lowerName ? ' active' : ''}`}>
      {upperName}
    </div>
  );
};

export default CountrySourceName;