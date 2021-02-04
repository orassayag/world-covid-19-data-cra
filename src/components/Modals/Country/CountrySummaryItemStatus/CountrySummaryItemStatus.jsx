import './CountrySummaryItemStatus.scss';

const CountrySummaryItemStatus = (props) => {
  const { sourceName } = props;

  return (
    <div className="source-name">
      {sourceName}
    </div>
  );
};

export default CountrySummaryItemStatus;