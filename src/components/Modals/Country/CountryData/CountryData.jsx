import React, { Fragment } from 'react';
import './CountryData.scss';
import CountryDataNoData from '../CountryDataNoData/CountryDataNoData';
import CountryDataSourcesList from '../CountryDataSourcesList/CountryDataSourcesList';
import CountryDataTitle from '../CountryDataTitle/CountryDataTitle';
import CountryOkButton from '../CountryOkButton/CountryOkButton';
import CountrySummary from '../CountrySummary/CountrySummary';
import CountryUpdates from '../CountryUpdates/CountryUpdates';
import CountryUpdatePanel from '../CountryUpdatePanel/CountryUpdatePanel';

const CountryData = (props) => {
  const { populationCount, isContainData, sourcesData, sourcesList,
    updateSourceData, updatesList, updatesHoursCount, summaryData,
    onActionClick, onActionChange } = props;
  let dataDOM = null;
  if (isContainData) {
    const updateSourceName = updateSourceData ? updateSourceData.sourceName : '';
    dataDOM = (
      <Fragment>
        <div className="live-data">
          <CountryDataTitle />
          <CountryUpdatePanel
            updateSourceData={updateSourceData}
          />
          <CountryDataSourcesList
            sourcesData={sourcesData}
            sourcesList={sourcesList}
            updateSourceName={updateSourceName}
            populationCount={populationCount}
          />
        </div>
        <CountryUpdates
          updatesList={updatesList}
          updatesHoursCount={updatesHoursCount}
          onActionChange={onActionChange}
        />
        <CountrySummary
          sourcesList={sourcesList}
          summaryData={summaryData}
        />
      </Fragment>
    );
  }
  else {
    dataDOM = (<CountryDataNoData />);
  }

  return (
    <div className={`country-data${isContainData ? '' : ' no-data'}`}>
      {dataDOM}
      <CountryOkButton
        onActionClick={onActionClick}
      />
    </div>
  );
};

export default CountryData;