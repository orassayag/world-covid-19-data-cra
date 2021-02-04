import './StatisticsSummaryItemStatus.scss';
import { Icon } from '../../../UI';

const StatisticsSummaryItemStatus = (props) => {
  const { sourceName, sourceStatusIconName, sourceNameClass } = props;

  return (
    <>
      <div className="source-status">
        <Icon
          name={sourceStatusIconName}
        />
      </div>
      <div className={`source-name${sourceNameClass}`}>
        {sourceName}
      </div>
    </>
  );
};

export default StatisticsSummaryItemStatus;