import React from 'react';
import './CountryDataNoData.scss';
import { Icon } from '../../../UI';

const CountryDataNoData = () => {

  return (
    <div className="no-data-container">
      <div className="icon">
        <Icon
          name="search"
        />
      </div>
      <div className="title">
        No Data Found
      </div>
    </div>
  );
};

export default CountryDataNoData;