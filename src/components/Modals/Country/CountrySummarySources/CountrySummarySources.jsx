import './CountrySummarySources.scss';
import CountrySummaryItem from '../CountrySummaryItem/CountrySummaryItem';
import CountrySummaryItemTotal from '../CountrySummaryItemTotal/CountrySummaryItemTotal';

const CountrySummarySources = (props) => {
  const { sourcesList, summaryData } = props;
  const summaryDataItemsDOM = [];
  for (let i = 0; i < sourcesList.length; i++) {
    const source = sourcesList[i];
    if (!source.isCovidData) {
      continue;
    }
    summaryDataItemsDOM.push(
      (<CountrySummaryItem
        key={i}
        sourceName={source.upperName}
        sourceSummaryData={summaryData.summaryDataList[source.lowerName]}
      />)
    );
  }

  return (
    <div className="statistics-sources">
      {summaryDataItemsDOM}
      <CountrySummaryItemTotal
        totalSummaryData={summaryData.totalSummaryData}
      />
    </div>
  );
};

export default CountrySummarySources;