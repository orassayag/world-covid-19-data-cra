import './CountryDataSourcesList.scss';
import CountryDataSourceItem from '../CountryDataSourceItem/CountryDataSourceItem';

const CountryDataSourcesList = (props) => {
  const { sourcesData, sourcesList, updateSourceName, populationCount } = props;
  const sources = [];
  for (let i = 0; i < sourcesList.length; i++) {
    const source = sourcesList[i];
    if (!source.isCovidData) {
      continue;
    }
    sources.push(
      (<CountryDataSourceItem
        key={i}
        source={source}
        data={sourcesData[source.lowerName]}
        updateSourceName={updateSourceName}
        populationCount={populationCount}
      />)
    );
  }

  return (
    <div className="data-list">
      {sources}
    </div>
  );
};

export default CountryDataSourcesList;