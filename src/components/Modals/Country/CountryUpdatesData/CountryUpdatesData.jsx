import React from 'react';
import './CountryUpdatesData.scss';
import CountryUpdateItem from '../CountryUpdateItem/CountryUpdateItem';

const CountryUpdatesData = (props) => {
  const { updatesList } = props;
  const itemsDOM = [];
  for (let i = 0; i < updatesList.length; i++) {
    const update = updatesList[i];
    itemsDOM.push(
      (<CountryUpdateItem
        key={update.id}
        statisticUpdate={update}
      />)
    );
  }

  return (
    <div className="data">
      {itemsDOM}
    </div>
  );
};

export default CountryUpdatesData;