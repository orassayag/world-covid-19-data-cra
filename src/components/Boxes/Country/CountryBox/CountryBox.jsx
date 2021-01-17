import React, { memo, forwardRef } from 'react';
import './CountryBox.scss';
import CountryData from '../CountryData/CountryData';
import CountryIdentity from '../CountryIdentity/CountryIdentity';
import CountryLeading from '../CountryLeading/CountryLeading';
import CountryNoData from '../CountryNoData/CountryNoData';
import CountryStatistics from '../CountryStatistics/CountryStatistics';
import CountryUpdatePanel from '../CountryUpdatePanel/CountryUpdatePanel';
import { countryService } from '../../../../services';

const compareCountryProps = (prevProps, nextProps) => {
	if (prevProps.isRefreshMode && nextProps.isRefreshMode) {
		return true;
	}
	return countryService.compareCountryProps(prevProps, nextProps);
};

// React memo works only with seperated properties.
const CountryBox = memo(forwardRef(({ id, displayName, upperCode2, titleClassName, leadingClassName, innerLeadingClassName,
	leadingIconName, flagClassName, locationClassName, boxClassName, order, googleMapsURL, populationCountDisplay,
	populationPercentageDisplay, leadingValueDisplay, isVisible, isContainData, updateSourceData, statisticsData,
	sourcesData, sourcesList, onActionClick }, ref) => {
	if (!isVisible) {
		return null;
	}
	let dataDOM = null;
	if (isContainData) {
		dataDOM = (
			<CountryData
				sourcesData={sourcesData}
				sourcesList={sourcesList}
				updateSourceName={updateSourceData ? updateSourceData.sourceName : ''}
			/>);
	}
	else {
		dataDOM = (<CountryNoData />);
	}

	return (
		<div className={`box${boxClassName}`} style={{ order: order }} ref={ref} name="country" data-action="modal" data-country-id={id} onClick={onActionClick}>
			<CountryUpdatePanel
				updateSourceData={updateSourceData}
			/>
			<CountryIdentity
				displayName={displayName}
				upperCode2={upperCode2}
				titleClassName={titleClassName}
				flagClassName={flagClassName}
				populationCountDisplay={populationCountDisplay}
				populationPercentageDisplay={populationPercentageDisplay}
			/>
			<CountryLeading
				leadingClassName={leadingClassName}
				innerLeadingClassName={innerLeadingClassName}
				leadingValueDisplay={leadingValueDisplay}
				leadingIconName={leadingIconName}
				locationClassName={locationClassName}
				googleMapsURL={googleMapsURL}
			/>
			{dataDOM}
			<CountryStatistics
				statisticsData={statisticsData}
			/>
		</div>
	);
}, compareCountryProps));

export default CountryBox;