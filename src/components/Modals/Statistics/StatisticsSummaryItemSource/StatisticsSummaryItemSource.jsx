import React from 'react';
import './StatisticsSummaryItemSource.scss';
import { Icon } from '../../../UI';

const StatisticsSummaryItemSource = (props) => {
  const { sourceName, iconName, valueDisplay } = props;

  return (
    <div className={`source-${sourceName}`}>
      <Icon
        name={iconName}
      /> {valueDisplay}
    </div>
  );
};

export default StatisticsSummaryItemSource;