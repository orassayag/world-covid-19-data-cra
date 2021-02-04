import { Fragment } from 'react';
import './CountryDataSourceItem.scss';
import { textUtils } from '../../../../utils';
import CountryDataSourceDisplayItem from '../CountryDataSourceDisplayItem/CountryDataSourceDisplayItem';
import CountryDataSourceDisplayItemNoData from '../CountryDataSourceDisplayItemNoData/CountryDataSourceDisplayItemNoData';

const CountryDataSourceItem = (props) => {
  const { source, data, updateSourceName, populationCount } = props;
  const { upperName, lowerName, isActive, isError } = source;
  const isAlert = updateSourceName && updateSourceName === lowerName;
  const itemsDOM = [];
  if (data) {
    const { dataItems } = data;
    for (let i = 0; i < dataItems.length; i++) {
      const { itemClass, iconName, count, countDisplay, countPerMillionDisplay, perMillionIconName } = dataItems[i];
      itemsDOM.push(
        (<Fragment key={i}>
          <CountryDataSourceDisplayItem
            itemClassName={`big${itemClass}`}
            iconName={iconName}
            number={countDisplay}
            percentage={textUtils.getPercentageDisplay(count, populationCount)}
          />
          <CountryDataSourceDisplayItem
            itemClassName={`small${itemClass}`}
            iconName={perMillionIconName}
            number={countPerMillionDisplay}
            percentage={null}
          />
        </Fragment>
        ));
    }
  }
  else {
    itemsDOM.push(
      (<CountryDataSourceDisplayItemNoData key={lowerName} />)
    );
  }

  return (
    <div className={`data-item${!isActive || isError ? ' not-active' : isAlert ? ' alert' : ''}`}>
      <div className={`name${isAlert ? ' active' : ''}`}>{upperName}</div>
      <div className={`items${data ? '' : ' no-data'}`}>
        {itemsDOM}
      </div>
    </div>
  );
};

export default CountryDataSourceItem;