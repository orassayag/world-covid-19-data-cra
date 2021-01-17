import React from 'react';
import './CountrySummaryItemSource.scss';
import { Icon } from '../../../UI';

const CountrySummaryItemSource = (props) => {
  const { type, iconName, valueDisplay } = props.dataItem;

  return (
    <div className={`source-${type}`}>
      <Icon
        name={iconName}
      /> {valueDisplay}
    </div>
  );
};

export default CountrySummaryItemSource;