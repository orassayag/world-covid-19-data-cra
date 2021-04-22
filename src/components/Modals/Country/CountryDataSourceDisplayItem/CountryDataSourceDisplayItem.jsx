import './CountryDataSourceDisplayItem.scss';
import { Icon } from '../../../UI';

const CountryDataSourceDisplayItem = (props) => {
  const { itemClassName, iconName, number, percentage } = props;

  return (
    <div className={`item ${itemClassName}`}>
      <div className="icon">
        <span>
          <Icon
            name={iconName}
          />
        </span>
      </div>
      <div className="number">{number}{itemClassName === 'big' ? <span className="percentage"> | ${percentage}%</span> : ''}</div>
    </div>
  );
};

export default CountryDataSourceDisplayItem;