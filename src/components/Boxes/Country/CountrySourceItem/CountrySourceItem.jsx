import React from 'react';
import './CountrySourceItem.scss';
import { Icon } from '../../../UI';

const CountrySourceItem = (props) => {
  const { iconName, itemClass, numberClass, countDisplay } = props.dataItem;

  return (
    <div className={`item${itemClass}`}>
      <div className="icon">
        <Icon
          name={iconName}
        />
      </div>
      <div className={`number${numberClass}`}>
        {countDisplay}
      </div>
    </div>
  );
};

export default CountrySourceItem;