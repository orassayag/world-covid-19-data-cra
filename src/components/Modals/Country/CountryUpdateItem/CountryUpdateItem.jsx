import './CountryUpdateItem.scss';
import CountryUpdateItemSource from '../CountryUpdateItemSource/CountryUpdateItemSource';

const CountryUpdateItem = (props) => {
  const { updateClassName, sourceName, dataItems, lastUpdateDateDisplay } = props.statisticUpdate;
  const itemsDOM = [];
  for (let i = 0; i < dataItems.length; i++) {
    itemsDOM.push(
      (<CountryUpdateItemSource
        key={i}
        item={dataItems[i]}
      />)
    );
  }

  return (
    <div className={`update-item${updateClassName}`}>
      <div className="source">
        {sourceName}
      </div>
      {itemsDOM}
      <CountryUpdateItemSource
        key="time"
        item={{
          type: 'time',
          iconName: 'clock',
          updateType: '',
          count: lastUpdateDateDisplay,
          countDisplay: lastUpdateDateDisplay
        }}
      />
    </div>
  );
};

export default CountryUpdateItem;