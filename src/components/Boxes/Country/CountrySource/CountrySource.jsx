import React from 'react';
import './CountrySource.scss';
import CountrySourceItem from '../CountrySourceItem/CountrySourceItem';
import CountrySourceName from '../CountrySourceName/CountrySourceName';
import CountrySourceNoData from '../CountrySourceNoData/CountrySourceNoData';

const CountrySource = (props) => {
  const { source, data, updateSourceName } = props;
  const { lowerName, upperName, isActive, isError } = source;
  let itemsDOM = null;
  if (data) {
    const { dataItems } = data;
    itemsDOM = [];
    for (let i = 0; i < dataItems.length; i++) {
      itemsDOM.push(
        (<CountrySourceItem
          key={i}
          dataItem={dataItems[i]}
        />)
      );
    }
    itemsDOM = (
      <div className="items">
        {itemsDOM}
      </div>
    );
  }
  else {
    itemsDOM = (<CountrySourceNoData />);
  }

  return (
    <div className={`source${!isActive || isError ? ' not-active' : ''}`}>
      <CountrySourceName
        upperName={upperName}
        lowerName={lowerName}
        updateSourceName={updateSourceName}
      />
      {itemsDOM}
    </div>
  );
};

export default CountrySource;