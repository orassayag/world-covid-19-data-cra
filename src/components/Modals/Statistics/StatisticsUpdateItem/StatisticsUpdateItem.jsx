import './StatisticsUpdateItem.scss';
import StatisticsUpdateItemSource from '../StatisticsUpdateItemSource/StatisticsUpdateItemSource';

const StatisticsUpdateItem = (props) => {
  const { id, sourceName, displayName, flagClassName, dataItems, lastUpdateDateDisplay, updateClassName } = props.statisticUpdate;
  const { onActionClick } = props;
  const itemsDOM = [];
  for (let i = 0; i < dataItems.length; i++) {
    itemsDOM.push(
      (<StatisticsUpdateItemSource
        key={i}
        item={dataItems[i]}
      />)
    );
  }

  return (
    <div className={`update-item${updateClassName}`} name="country" data-action="replace-modal" data-country-id={id} onClick={onActionClick}>
      <div className="source">
        {sourceName}
      </div>
      <div className="country">
        <i className={flagClassName}></i>
      </div>
      <div className="country-name">
        {displayName}
      </div>
      {itemsDOM}
      <div className="time">
        {lastUpdateDateDisplay}
      </div>
    </div>
  );
};

export default StatisticsUpdateItem;