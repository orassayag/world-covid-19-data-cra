import React, { useCallback } from 'react';
import './CountryModal.scss';
import CountryData from '../CountryData/CountryData';
import CountryExitButton from '../CountryExitButton/CountryExitButton';
import CountryIdentity from '../CountryIdentity/CountryIdentity';
import { coreUtils } from '../../../../utils';
import { engineService } from '../../../../services';

const CountryModal = (props) => {
  const { country, updatesList, sourcesList, onActionClick } = props;
  const { id, displayName, bigFlagClassName, coatClassName, populationCount,
    isContainData, updatesHoursCount, updateSourceData, sourcesData, summaryData } = country;
  const countryDetailsList = engineService.getCountryIdentityDetailsList(country);

  // Update action on country modal click.
  const handleActionChange = useCallback((e) => {
    engineService.runModalActionUpdate({
      modalName: 'Country',
      action: coreUtils.getAttributeName(e, 'data-action'),
      value: coreUtils.getValue(e),
      countryId: id
    });
  }, []);

  return (
    <div className={`modal-content country ${isContainData ? '' : 'no-data'} f16 f16-extra`}>
      <div className="content">
        <CountryExitButton
          onActionClick={onActionClick}
        />
        <CountryIdentity
          displayName={displayName}
          bigFlagClassName={bigFlagClassName}
          coatClassName={coatClassName}
          countryDetailsList={countryDetailsList}
        />
        <CountryData
          populationCount={populationCount}
          isContainData={isContainData}
          sourcesData={sourcesData}
          sourcesList={sourcesList}
          updateSourceData={updateSourceData}
          updatesList={updatesList}
          updatesHoursCount={updatesHoursCount}
          summaryData={summaryData}
          onActionClick={onActionClick}
          onActionChange={handleActionChange}
        />
      </div>
    </div>
  );
};

export default CountryModal;