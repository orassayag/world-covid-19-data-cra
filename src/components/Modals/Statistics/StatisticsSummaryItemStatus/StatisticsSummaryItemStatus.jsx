import React, { Fragment } from 'react';
import './StatisticsSummaryItemStatus.scss';
import { Icon } from '../../../UI';

const StatisticsSummaryItemStatus = (props) => {
  const { sourceName, sourceStatusIconName, sourceNameClass } = props;

  return (
    <Fragment>
      <div className="source-status">
        <Icon
          name={sourceStatusIconName}
        />
      </div>
      <div className={`source-name${sourceNameClass}`}>
        {sourceName}
      </div>
    </Fragment>
  );
};

export default StatisticsSummaryItemStatus;