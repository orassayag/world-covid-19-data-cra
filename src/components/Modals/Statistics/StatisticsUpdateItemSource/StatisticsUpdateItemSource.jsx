import './StatisticsUpdateItemSource.scss';
import { Icon } from '../../../UI';

const StatisticsUpdateItemSource = (props) => {
  const { type, iconName, updateType, count, countDisplay } = props.item;

  return (
    <div className={type}>
      {count &&
        <>
          <Icon
            name={iconName}
          /> {updateType}{countDisplay}
        </>
      }
    </div>
  );
};

export default StatisticsUpdateItemSource;