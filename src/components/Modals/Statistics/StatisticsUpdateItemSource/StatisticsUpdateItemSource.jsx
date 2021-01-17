import React, { Fragment } from 'react';
import './StatisticsUpdateItemSource.scss';
import { Icon } from '../../../UI';

const StatisticsUpdateItemSource = (props) => {
  const { type, iconName, updateType, count, countDisplay } = props.item;

  return (
    <div className={type}>
      {count &&
        <Fragment>
          <Icon
            name={iconName}
          /> {updateType}{countDisplay}
        </Fragment>
      }
    </div>
  );
};

export default StatisticsUpdateItemSource;