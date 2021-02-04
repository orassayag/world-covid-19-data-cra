import './CountrySummary.scss';
import CountrySummarySources from '../CountrySummarySources/CountrySummarySources';

const StatisticsSummary = (props) => {
  const { sourcesList, summaryData } = props;

  return (
    <div className="country-summary">
      <div className="title">
        Statistics
      </div>
      <CountrySummarySources
        sourcesList={sourcesList}
        summaryData={summaryData}
      />
    </div>
  );
};

export default StatisticsSummary;