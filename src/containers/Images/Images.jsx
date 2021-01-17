import React from 'react';
import './Images.scss';
import { CountrySortType } from '../../core/enums';
import { countryService, sortService } from '../../services';

const Images = () => {
  const countriesList = countryService.getCountriesList(null, {
    filterOptions: null,
    sortType: sortService.sortsList[CountrySortType.NAME],
    isReturnArray: true
  });
  const countriesDOM = [];
  for (let i = 0; i < countriesList.length; i++) {
    const { id, displayName, upperCode2, flagClassName, bigFlagClassName, coatClassName, locationClassName } = countriesList[i];
    countriesDOM.push(
      (
        <div key={id} className="country">
          <div className="name">
            {displayName} ({upperCode2})
          </div>
          <div className="flag32">
            <div className="f32 f32-extra">
              <i className={flagClassName}></i>
            </div>
          </div>
          <div className="flag16">
            <div className="f16 f16-extra">
              <i className={flagClassName}></i>
            </div>
          </div>
          <div className="locations">
            {locationClassName && <span className={`location night${locationClassName}`}></span>}
          </div>
          <div className={`big-flag ${bigFlagClassName}`}></div>
          <div className={`coat ${coatClassName}`}></div>
        </div>
      )
    );
  }

  return (
    <div className="container">
      <div className="countries">
        {countriesDOM}
      </div>
    </div>
  );
};

export default Images;