import settings from '../../settings/settings';
import { countriesData } from '../../data';
import {
	CountryIdentityItemModel, FetchDataResultsModel, StatisticsDataItemModel, SummaryDataModel,
	SummaryDataItemModel, SummaryTimeItemModel, UpdateSourceDataModel, UpdateSourceDataItemModel
} from '../../core/models';
import {
	CountrySortType, CountriesActionType, SourceNumberType, SourceUpdateType, UpdateCountryType
} from '../../core/enums';
import apiService from './api.service';
import countryCommonLogicService from './countryCommonLogic.service';
import localService from './local.service';
import sortService from './sort.service';
import { coreUtils, logicUtils, textUtils, timeUtils } from '../../utils';

class CountryService {

	constructor() {
		const dateNow = timeUtils.getCurrentTime();
		this.pastDummySortValue = dateNow.setDate(dateNow.getDate() - 1);
		this.isCountriesLog = settings.IS_COUNTRIES_LOG;
		this.countriesKeysList = [];
	}

	initiateCountriesList() {
		// ToDo: Check query parameters here if relevent.
		const countriesList = this.getCountriesList(null, {
			filterOptions: {
				isActive: [true],
				isContainData: [true]
			},
			sortType: sortService.sortsList[CountrySortType.LAST_UPDATE_TIME], // Don't change this, it's initiate value.
			forceSortDirection: null,
			isReturnArray: false
		});
		this.countriesKeysList = Object.keys(countriesList);
		const countriesNameIdList = this.updateCountriesNameIdList(countriesList);
		return {
			countriesList: countriesList,
			countriesNameIdList: countriesNameIdList
		};
	}

	updateCountriesNameIdList(countriesList) {
		const countriesNameIdList = [];
		for (let i = 0; i < this.countriesKeysList.length; i++) {
			const { id, displayName, isVisible } = countriesList[this.countriesKeysList[i]];
			if (isVisible) {
				countriesNameIdList.push({
					id: id,
					displayName: displayName
				});
			}
		}
		return countriesNameIdList;
	}

	getCountriesList(countriesList, options) {
		if (!countriesList) {
			countriesList = countriesData.countriesList;
		}
		// To array.
		countriesList = Object.values(countriesList);
		// Filter.
		countriesList = this.filter(countriesList, options);
		// Sort.
		countriesList = this.sort(countriesList, options);
		// Keep array.
		if (options.isReturnArray) {
			return countriesList;
		}
		else {
			// To object.
			return textUtils.convertToObject(countriesList, 'id');
		}
	}

	filter(countriesList, options) {
		if (!options.filterOptions) {
			return countriesList;
		}
		return logicUtils.filter(countriesList, options.filterOptions);
	}

	setCountryOrder(data) {
		const { countriesList, id, order } = data;
		let { country, index } = data;
		if (!country) {
			index = countriesList.findIndex(c => c.id === id);
			country = countriesList[index];
		}
		country.order = order;
		if (country.statisticsData.length > 0) {
			country.statisticsData[0].value = (country.order + 1).toString();
		}
		countriesList[index] = country;
		return countriesList;
	}

	sort(countriesList, options) {
		if (!options.sortType) {
			return countriesList;
		}
		countriesList = logicUtils.sort(countriesList, [...options.sortType.fieldsList, 'lowerName']);
		let dist = 1;
		let lastOrder = 0;
		for (let i = 0; i < countriesList.length; i++) {
			const country = countriesList[i];
			if (country.lowerName === countriesData.otherCountryId || country.id === countriesData.worldCountryId) {
				dist--;
				continue;
			}
			lastOrder = i + dist;
			countriesList = this.setCountryOrder({
				countriesList: countriesList,
				id: null,
				order: lastOrder,
				country: country,
				index: i
			});
		}
		// World.
		countriesList = this.setCountryOrder({
			countriesList: countriesList,
			id: countriesData.worldCountryId,
			order: 0,
			country: null,
			index: null
		});
		// Other.
		countriesList = this.setCountryOrder({
			countriesList: countriesList,
			id: countriesData.otherCountryId,
			order: lastOrder + 1,
			country: null,
			index: null
		});
		return countriesList;
	}

	getDifference(oldNumber, newNumber) {
		if (oldNumber === newNumber) {
			return [0, null];
		}
		else if (oldNumber > newNumber) {
			return [oldNumber - newNumber, SourceUpdateType.SUB];
		} else {
			return [newNumber - oldNumber, SourceUpdateType.ADD];
		}
	}

	async getCountryData(data) {
		const { source, settingsList, countriesList, countriesKeysList, isInitiateComplete } = data;
		let fetchDataResults = null;
		if (this.isCountriesLog) {
			const dateNow = timeUtils.getCurrentTime();
			console.log(`${source.lowerName} | ${timeUtils.getTimeDisplay(dateNow)}`);
		}
		if (!source.isActive) {
			fetchDataResults = new FetchDataResultsModel(source);
			fetchDataResults.resultData = countriesList;
			return fetchDataResults;
		}
		if (settingsList.isLiveMode) {
			fetchDataResults = await this.fetchLiveData(source);
			if (fetchDataResults.error) {
				return fetchDataResults;
			}
			fetchDataResults = this[`${source.lowerName}SyncData`]({
				fetchDataResults: fetchDataResults,
				countriesList: countriesList
			});
		}
		else {
			fetchDataResults = new FetchDataResultsModel(source);
			fetchDataResults = await this.localSyncData({
				fetchDataResults: fetchDataResults,
				countriesList: countriesList,
				countriesKeysList: countriesKeysList,
				isInitiateComplete: isInitiateComplete
			});
			await coreUtils.sleep(localService.simulateLocalMillisecondsDelayPerRound);
		}
		return fetchDataResults;
	}

	async fetchLiveData(source) {
		const fetchDataResults = new FetchDataResultsModel(source);
		const responseResult = await apiService.getRequest(fetchDataResults.source);
		if (!responseResult) {
			fetchDataResults.error = {
				description: `For source '${source}' - No responseResult parameter exists`,
				code: '1000015'
			};
			return fetchDataResults;
		}
		if (responseResult.error) {
			fetchDataResults.error = {
				description: `For source '${source}' - Server error: ${responseResult.error}`,
				code: '1000016'
			};
			return fetchDataResults;
		}
		if (!responseResult.response) {
			fetchDataResults.error = {
				description: `For source '${source}' - No responseResult.response parameter exists`,
				code: '1000017'
			};
			return fetchDataResults;
		}
		if (!responseResult.response.data) {
			fetchDataResults.error = {
				description: `For source '${source}' - No responseResult.response.data parameter exists`,
				code: '1000018'
			};
			return fetchDataResults;
		}
		fetchDataResults.resultData = responseResult.response.data;
		return fetchDataResults;
	}

	getElementValue(element, count) {
		let text = null;
		for (let i = 0; i < count; i++) {
			if (!element) {
				break;
			}
			element = element.nextElementSibling;
		}
		if (element) {
			text = element.textContent;
		}
		return text;
	}

	getCountryName(element, count) {
		return this.getElementValue(element, count);
	}

	getCountryValue(element, count) {
		const number = this.getElementValue(element, count);
		return textUtils.getNumberFromStringComma(number);
	}

	getCountryPairValues(element, count) {
		return countryCommonLogicService.getNumberArray(this.getCountryValue(element, count));
	}

	getCountryCountValue(element, count) {
		return this.getCountryValue(element, count);
	}

	getPairsFromNumbers(numbers) {
		const pairs = [];
		for (let i = 0; i < numbers.length; i++) {
			pairs.push(countryCommonLogicService.getNumberArray(numbers[i]));
		}
		return pairs;
	}

	getPairsFromStrings(numbers) {
		const pairs = [];
		for (let i = 0; i < numbers.length; i++) {
			pairs.push(countryCommonLogicService.getNumberArray(textUtils.getNumberFromStringComma(numbers[i])));
		}
		return pairs;
	}

	createSummaryData() {
		return new SummaryDataModel({
			cases: new SummaryDataItemModel({
				type: SourceNumberType.CASE,
				iconName: 'virus'
			}),
			deaths: new SummaryDataItemModel({
				type: SourceNumberType.DEATH,
				iconName: 'skull-crossbones'
			}),
			recovers: new SummaryDataItemModel({
				type: SourceNumberType.RECOVER,
				iconName: 'heart'
			}),
			updates: new SummaryDataItemModel({
				type: SourceNumberType.UPDATE,
				iconName: 'sync-alt'
			}),
			lastUpdateTime: new SummaryTimeItemModel({
				type: SourceNumberType.LAST_UPDATE,
				iconName: 'clock'
			})
		});
	}

	initiateSummaryData(sourcesList, sourcesKeysList) {
		const summaryData = {};
		for (let i = 0; i < sourcesKeysList.length; i++) {
			const source = sourcesList[sourcesKeysList[i]];
			if (source.isCovidData) {
				summaryData[sourcesKeysList[i]] = this.createSummaryData();
			}
		}
		return {
			summaryDataList: summaryData,
			totalSummaryData: this.createSummaryData()
		};
	}

	finalizeCountryData(country, sourcesList, sourcesKeysList, worldPopulationCount) {
		// Calculate the "populationPercentageDisplay" to the countries which are missing.
		if (!country.populationPercentageDisplay) {
			country.populationCount = country.staticPopulationCount;
			country.populationPercentageDisplay = textUtils.getPercentageDisplay(country.populationCount, worldPopulationCount);
		}
		// Set statistics data.
		country.statisticsData = [
			new StatisticsDataItemModel({
				value: (country.order + 1).toString(),
				iconName: 'map-marker-alt'
			}),
			new StatisticsDataItemModel({
				value: country.id,
				iconName: 'passport'
			}),
			new StatisticsDataItemModel({
				value: country.updatesCountDisplay,
				iconName: 'sync-alt'
			}),
			new StatisticsDataItemModel({
				value: country.lastUpdateDateDisplay,
				iconName: 'hourglass-half'
			})
		];
		// Set summary data.
		country.summaryData = this.initiateSummaryData(sourcesList, sourcesKeysList);
		return country;
	}

	getCountryById(id, countriesList) {
		return countriesList.find(c => c.id === parseInt(id));
	}

	getCountryAge(year) {
		return Math.abs(year - timeUtils.getCurrentTime().getFullYear());
	}

	getDisplayPopulation(populationCountDisplay, populationPercentageDisplay) {
		return `${populationCountDisplay} (${populationPercentageDisplay}%)`;
	}

	getOtherCountryDetailsList(populationCountDisplay, populationPercentageDisplay) {
		const otherDetailsList = [];
		otherDetailsList.push(new CountryIdentityItemModel({
			iconName: 'users',
			iconTooltip: 'Population count',
			value: this.getDisplayPopulation(populationCountDisplay, populationPercentageDisplay)
		}));
		otherDetailsList.push(new CountryIdentityItemModel({
			iconName: 'university',
			iconTooltip: 'Places count',
			value: countriesData.otherPlacesList.length
		}));
		for (let i = 0; i < countriesData.otherPlacesList.length; i++) {
			const otherPlace = countriesData.otherPlacesList[i];
			const item = new CountryIdentityItemModel({
				iconName: null,
				iconTooltip: null,
				value: `${settings.WIKIPEDIA_BASE_URL}${otherPlace.wikipediaURL}`
			});
			item.isURL = true;
			item.urlText = `${otherPlace.displayName} (${otherPlace.populationCountDisplay})`;
			otherDetailsList.push(item);
		}
		otherDetailsList[otherDetailsList.length - 1].isLastItem = true;
		return otherDetailsList;
	}

	getCountryIdentityDetailsList(data) {
		const { id, upperCode2, upperCode3, otherCodes, numericCode, phoneCodes, continents, areaSize,
			capitalName, independentYears, googleMapsURL, wikipediaURL,
			populationCountDisplay, populationPercentageDisplay } = data;
		if (id === countriesData.otherCountryId) {
			return this.getOtherCountryDetailsList(populationCountDisplay, populationPercentageDisplay);
		}
		const countryDetailsList = [];
		countryDetailsList.push(new CountryIdentityItemModel({
			iconName: 'users',
			iconTooltip: 'Population count',
			value: this.getDisplayPopulation(populationCountDisplay, populationPercentageDisplay)
		}));
		if (numericCode) {
			countryDetailsList.push(new CountryIdentityItemModel({
				iconName: 'passport',
				iconTooltip: 'Country numberic code',
				value: numericCode
			}));
		}
		if (continents.length > 0) {
			countryDetailsList.push(new CountryIdentityItemModel({
				iconName: 'images',
				iconTooltip: 'Continents',
				value: continents.join(', ')
			}));
		}
		if (areaSize) {
			countryDetailsList.push(new CountryIdentityItemModel({
				iconName: 'route',
				iconTooltip: 'Total area size',
				value: `${areaSize} km²`
			}));
		}
		if (capitalName) {
			countryDetailsList.push(new CountryIdentityItemModel({
				iconName: 'university',
				iconTooltip: 'Capital',
				value: capitalName
			}));
		}
		if (independentYears.length > 0) {
			let independentText = '';
			for (let i = 0; i < independentYears.length; i++) {
				const year = independentYears[i];
				independentText += `${year} (${this.getCountryAge(year)} years ago), `;
			}
			independentText = textUtils.removeLastCharacters(independentText, 2);
			countryDetailsList.push(new CountryIdentityItemModel({
				iconName: 'book',
				iconTooltip: 'Independent years',
				value: independentText
			}));
		}
		if (upperCode2) {
			countryDetailsList.push(new CountryIdentityItemModel({
				iconName: 'trademark',
				iconTooltip: 'ISO 3166-1 alpha-2 code',
				value: upperCode2
			}));
		}
		if (upperCode3) {
			countryDetailsList.push(new CountryIdentityItemModel({
				iconName: 'trademark',
				iconTooltip: 'ISO 3166-1 alpha-3 code',
				value: upperCode3
			}));
		}
		if (otherCodes) {
			countryDetailsList.push(new CountryIdentityItemModel({
				iconName: 'trademark',
				iconTooltip: 'Specific area/country codes',
				value: otherCodes.join(', ')
			}));
		}
		if (phoneCodes) {
			countryDetailsList.push(new CountryIdentityItemModel({
				iconName: 'phone',
				iconTooltip: 'Phone codes',
				value: phoneCodes.join(', ')
			}));
		}
		if (googleMapsURL) {
			const item = new CountryIdentityItemModel({
				iconName: 'google',
				iconTooltip: 'Google maps location',
				value: `${settings.GOOGLE_MAPS_BASE_URL}${googleMapsURL}`
			});
			item.itemClassName = ' icon-only';
			item.iconType = 'b';
			item.isIconOnly = true;
			countryDetailsList.push(item);
		}
		if (wikipediaURL) {
			const item = new CountryIdentityItemModel({
				iconName: 'wikipedia-w',
				iconTooltip: 'Wikipedia',
				value: `${settings.WIKIPEDIA_BASE_URL}${wikipediaURL}`
			});
			item.itemClassName = ' icon-only';
			item.iconType = 'b';
			item.isIconOnly = true;
			countryDetailsList.push(item);
		}
		countryDetailsList[countryDetailsList.length - 1].isLastItem = true;
		return countryDetailsList;
	}

	updateCountryData(country, fetchDataResults, sourcesKeysList, settingsList, dateNow) {
		let source, updateCountryType = null;
		if (fetchDataResults) {
			source = fetchDataResults.source;
			updateCountryType = fetchDataResults.updateCountryType;
		}
		// Update last update time and added time.
		country = this.updateTimes(country, sourcesKeysList, dateNow);
		// Update leading.
		country = this.updateLeading({
			country: country,
			source: source,
			updateCountryType: updateCountryType,
			settingsList: settingsList
		});
		return country;
	}

	cleanupCountryData(country, sourcesKeysList) {
		// Clear previous updates.
		if (country.updateSourceData) {
			for (let i = 0; i < sourcesKeysList.length; i++) {
				const sourceKey = [sourcesKeysList[i]];
				const sourceData = country.sourcesData[sourceKey];
				if (sourceData) {
					for (let y = 0; y < sourceData.dataItems.length; y++) {
						sourceData.dataItems[y].itemClass = '';
					}
					country.sourcesData[sourceKey] = sourceData;
				}
			}
			country.leadingClassName = '';
			country.boxClassName = '';
			country.updateSourceData = null;
		}
		// Clear summary data.
		if (country.lastUpdateDate) {
			for (let i = 0; i < sourcesKeysList.length; i++) {
				const sourceSummary = country.summaryData.summaryDataList[sourcesKeysList[i]];
				if (sourceSummary) {
					sourceSummary.itemClassName = '';
					country.summaryData.summaryDataList[sourcesKeysList[i]] = sourceSummary;
				}
			}
		}
		return country;
	}

	updateCountryField(data) {
		const { countryId, fieldName, fieldValue, settingsList, isRefreshList } = data;
		let { countriesList } = data;
		countriesList[countryId][fieldName] = fieldValue;
		if (isRefreshList) {
			countriesList = this.getCountriesList(countriesList, {
				filterOptions: {
					isActive: [true],
					isContainData: [true]
				},
				sortType: settingsList.sortType,
				forceSortDirection: settingsList.forceSortDirection,
				isReturnArray: false
			});
		}
		return countriesList;
	}

	updateCountries(data) {
		const { countriesActionType, fetchDataResults, settingsList, countriesKeysList, sourcesList, sourcesKeysList } = data;
		let { countriesList } = data;
		let worldPopulationCount = null;
		let isRefreshList = countriesActionType === CountriesActionType.FINALIZE || CountriesActionType.UPDATE;
		if (countriesActionType === CountriesActionType.FINALIZE) {
			worldPopulationCount = countriesList[countriesData.worldCountryId].dynamicPopulationCount;
			countriesList[countriesData.worldCountryId].populationPercentageDisplay = '100';
		}
		const dateNow = timeUtils.getCurrentTime();
		for (let i = 0; i < countriesKeysList.length; i++) {
			const countryId = countriesKeysList[i];
			let country = countriesList[countryId];
			switch (countriesActionType) {
				case CountriesActionType.FINALIZE: {
					country = this.finalizeCountryData(country, sourcesList, sourcesKeysList, worldPopulationCount);
					country = this.updateCountryData(country, fetchDataResults, sourcesKeysList, settingsList, dateNow);
					break;
				}
				case CountriesActionType.CLEANUP: {
					country = this.cleanupCountryData(country, sourcesKeysList);
					break;
				}
				case CountriesActionType.UPDATE: {
					country = this.updateCountryData(country, fetchDataResults, sourcesKeysList, settingsList, dateNow);
					break;
				}
				case CountriesActionType.INACTIVE: {
					country = this.cleanupCountryData(country, sourcesKeysList);
					country = this.updateCountryData(country, fetchDataResults, sourcesKeysList, settingsList, dateNow);
					break;
				}
				case CountriesActionType.REFRESH: {
					country = this.cleanupCountryData(country, sourcesKeysList);
					country = this.updateCountryData(country, fetchDataResults, sourcesKeysList, settingsList, dateNow);
					break;
				}
			}
			countriesList[countryId] = country;
		}
		if (isRefreshList) {
			countriesList = this.getCountriesList(countriesList, {
				filterOptions: {
					isActive: [true],
					isContainData: [true]
				},
				sortType: settingsList.sortType,
				forceSortDirection: settingsList.forceSortDirection,
				isReturnArray: false
			});
		}
		return countriesList;
	}

	updateTimes(country, sourcesKeysList, dateNow) {
		// Last update time.
		if (country.lastUpdateDate) {
			const { differenceTime, differenceTimeDisplay } = timeUtils.getDifferenceTimesDisplay({
				startDateTime: country.lastUpdateDate,
				endDateTime: dateNow,
				maximumElementsCount: 3
			});
			country.lastUpdateDateDisplay = timeUtils.getDisplayTextTime(differenceTimeDisplay);
			country.lastUpdateDateDifference = differenceTime;
			country.statisticsData[3].value = `${country.lastUpdateDateDisplay} (${country.lastUpdateSourceName})`;
			// Summary Data.
			for (let i = 0; i < sourcesKeysList.length; i++) {
				const sourceSummaryData = country.summaryData.summaryDataList[sourcesKeysList[i]];
				if (sourceSummaryData && sourceSummaryData.dataItems[4].value) {
					const sourceUpdatedTime = timeUtils.getDifferenceTimesDisplay({
						startDateTime: sourceSummaryData.dataItems[4].value,
						endDateTime: dateNow,
						maximumElementsCount: 3
					});
					sourceSummaryData.dataItems[4].valueDisplay = timeUtils.getDisplayTextTime(sourceUpdatedTime.differenceTimeDisplay);
					country.summaryData.summaryDataList[sourcesKeysList[i]] = sourceSummaryData;
				}
			}
			const totalSummaryData = country.summaryData.totalSummaryData;
			if (totalSummaryData.dataItems[4].value) {
				const totalUpdatedTime = timeUtils.getDifferenceTimesDisplay({
					startDateTime: totalSummaryData.dataItems[4].value,
					endDateTime: dateNow,
					maximumElementsCount: 3
				});
				totalSummaryData.dataItems[4].valueDisplay = timeUtils.getDisplayTextTime(totalUpdatedTime.differenceTimeDisplay);
				country.summaryData.totalSummaryData = totalSummaryData;
			}
		}
		// Added time.
		const { differenceTimeDisplay } = timeUtils.getDifferenceTimesDisplay({
			startDateTime: country.addedDate,
			endDateTime: dateNow,
			maximumElementsCount: 3
		});
		country.addedDateDisplay = timeUtils.getDisplayTextTime(differenceTimeDisplay);
		return country;
	}

	setCovidLeadingData(data) {
		const { sortTypeName, country, source, leadingSourceName, leadingIconName, leadingIconNamePerMillion, updateCountryType, index } = data;
		const isPerMillion = sortTypeName.indexOf('Million') > -1;
		let leadingValueDisplayFieldName = null;
		let sourceDataItemsFieldName = null;
		let iconName = null;
		if (isPerMillion) {
			leadingValueDisplayFieldName = 'countPerMillionDisplay';
			sourceDataItemsFieldName = 'countPerMillion';
			iconName = leadingIconNamePerMillion;
		}
		else {
			leadingValueDisplayFieldName = 'countLeadingValue';
			sourceDataItemsFieldName = 'count';
			iconName = leadingIconName;
		}
		let leadingValueDisplay = 'N/A';
		let sortValue = null;
		if (country.sourcesData) {
			let sourceDataItems = country.sourcesData[leadingSourceName];
			if (sourceDataItems && sourceDataItems.dataItems.length > 0) {
				sourceDataItems = sourceDataItems.dataItems[index];
				leadingValueDisplay = sourceDataItems[leadingValueDisplayFieldName];
				sortValue = sourceDataItems[sourceDataItemsFieldName];
			}
		}
		country.leadingValueDisplay = leadingValueDisplay;
		country.sortValue = sortValue;
		country.leadingIconName = iconName;
		if (source && updateCountryType && country.updateSourceData) {
			const isReleventUpdate = source.lowerName === leadingSourceName && updateCountryType === UpdateCountryType.DATA;
			if (isReleventUpdate) {
				const dataItem = country.updateSourceData.dataItems[index];
				if (dataItem) {
					country.leadingClassName = dataItem[sourceDataItemsFieldName] > 0 ? ` ${sortTypeName}` : '';
				}
			}
		}
		return country;
	}

	setOtherLeadingData(data) {
		let { country } = data;
		const { isTakeFirst, defaultSortValue, leadingValueFieldName, sortValueFieldName, leadingIconName, innerLeadingClassName } = data;
		country.leadingValueDisplay = isTakeFirst ? country[leadingValueFieldName][0] : country[leadingValueFieldName];
		country.leadingIconName = leadingIconName;
		country.sortValue = country[sortValueFieldName] || defaultSortValue;
		country.innerLeadingClassName = innerLeadingClassName;
		return country;
	}

	updateLeading(data) {
		const { settingsList, source, updateCountryType } = data;
		let { country } = data;
		const sortTypeName = settingsList.sortType.sortTypeName;
		switch (sortTypeName) {
			case CountrySortType.CASE:
			case CountrySortType.CASE_PER_MILLION: {
				country = this.setCovidLeadingData({
					sortTypeName: sortTypeName,
					country: country,
					source: source,
					leadingSourceName: settingsList.leadingSource.lowerName,
					leadingIconName: 'virus',
					leadingIconNamePerMillion: 'viruses',
					updateCountryType: updateCountryType,
					index: 0
				});
				country.innerLeadingClassName = sortTypeName;
				break;
			}
			case CountrySortType.DEATH:
			case CountrySortType.DEATH_PER_MILLION: {
				country = this.setCovidLeadingData({
					sortTypeName: sortTypeName,
					country: country,
					source: source,
					leadingSourceName: settingsList.leadingSource.lowerName,
					leadingIconName: 'skull-crossbones',
					leadingIconNamePerMillion: 'skull',
					updateCountryType: updateCountryType,
					index: 1
				});
				country.innerLeadingClassName = sortTypeName;
				break;
			}
			case CountrySortType.RECOVER:
			case CountrySortType.RECOVER_PER_MILLION: {
				country = this.setCovidLeadingData({
					sortTypeName: sortTypeName,
					country: country,
					source: source,
					leadingSourceName: settingsList.leadingSource.lowerName,
					leadingIconName: 'heart',
					leadingIconNamePerMillion: 'shield-virus',
					updateCountryType: updateCountryType,
					index: 2
				});
				country.innerLeadingClassName = sortTypeName;
				break;
			}
			case CountrySortType.NAME: {
				country = this.setOtherLeadingData({
					country: country,
					isTakeFirst: false,
					defaultSortValue: null,
					leadingValueFieldName: 'displayName',
					sortValueFieldName: 'lowerName',
					leadingIconName: null,
					innerLeadingClassName: `${sortTypeName}${country.nameLeadingClassName}`
				});
				break;
			}
			case CountrySortType.CODE: {
				country = this.setOtherLeadingData({
					country: country,
					isTakeFirst: false,
					defaultSortValue: null,
					leadingValueFieldName: 'upperCode2',
					sortValueFieldName: 'lowerCode2',
					leadingIconName: null,
					innerLeadingClassName: sortTypeName
				});
				break;
			}
			case CountrySortType.CONTINENT: {
				country = this.setOtherLeadingData({
					country: country,
					isTakeFirst: true,
					defaultSortValue: null,
					leadingValueFieldName: 'continents',
					sortValueFieldName: 'continents',
					leadingIconName: 'images',
					innerLeadingClassName: sortTypeName
				});
				break;
			}
			case CountrySortType.POPULATION: {
				country = this.setOtherLeadingData({
					country: country,
					isTakeFirst: false,
					defaultSortValue: null,
					leadingValueFieldName: 'populationCountDisplay',
					sortValueFieldName: 'populationCount',
					leadingIconName: 'users',
					innerLeadingClassName: sortTypeName
				});
				break;
			}
			case CountrySortType.ADD_TIME: {
				country = this.setOtherLeadingData({
					country: country,
					isTakeFirst: false,
					defaultSortValue: null,
					leadingValueFieldName: 'addedDateDisplay',
					sortValueFieldName: 'addedDate',
					leadingIconName: 'adjust',
					innerLeadingClassName: sortTypeName
				});
				break;
			}
			case CountrySortType.UPDATES_COUNT: {
				country = this.setOtherLeadingData({
					country: country,
					isTakeFirst: false,
					defaultSortValue: null,
					leadingValueFieldName: 'updatesCountDisplay',
					sortValueFieldName: 'updatesCount',
					leadingIconName: 'sync-alt',
					innerLeadingClassName: sortTypeName
				});
				break;
			}
			case CountrySortType.LAST_UPDATE_TIME: {
				country = this.setOtherLeadingData({
					country: country,
					isTakeFirst: false,
					defaultSortValue: this.pastDummySortValue,
					leadingValueFieldName: 'lastUpdateDateDisplay',
					sortValueFieldName: 'lastUpdateDate',
					leadingIconName: 'hourglass-half',
					innerLeadingClassName: sortTypeName
				});
				break;
			}
		}
		return country;
	}

	getBoxClassName(casesDiff, deathsDiff, recoversDiff) {
		let boxClassName = ' alert ';
		const list = Array.from(new Set([
			textUtils.getNumberIfEmpty(casesDiff),
			textUtils.getNumberIfEmpty(deathsDiff),
			textUtils.getNumberIfEmpty(recoversDiff)
		]));
		if (textUtils.isAllEqual(list)) {
			boxClassName += 'all';
		}
		switch (Math.max(...list)) {
			case casesDiff: { boxClassName += 'case'; break; }
			case deathsDiff: { boxClassName += 'death'; break; }
			case recoversDiff: { boxClassName += 'recover'; break; }
		}
		return boxClassName;
	}

	setSummaryDataValues(dataItem, newValue, newValueDisplay) {
		const { type, iconName, value, valueDisplay } = dataItem;
		let currentValue = value;
		let currentValueDisplay = valueDisplay;
		switch (type) {
			case SourceNumberType.CASE:
			case SourceNumberType.DEATH:
			case SourceNumberType.RECOVER:
				if (!textUtils.isInvalidNumber(newValue)) {
					currentValue += newValue;
					currentValueDisplay = textUtils.getStringCommaFromNumber(currentValue);
				}
				break;
			case SourceNumberType.UPDATE:
				currentValue = currentValue > 0 ? currentValue + 1 : 1;
				currentValueDisplay = textUtils.getStringCommaFromNumber(currentValue);
				break;
			case SourceNumberType.LAST_UPDATE:
				currentValue = newValue;
				currentValueDisplay = newValueDisplay;
				return new SummaryTimeItemModel({
					type: type,
					iconName: iconName,
					value: currentValue,
					valueDisplay: currentValueDisplay
				});
		}
		return new SummaryDataItemModel({
			type: type,
			iconName: iconName,
			value: currentValue,
			valueDisplay: currentValueDisplay
		});
	}

	setSummaryData(data) {
		// Summary Data.
		const { country, lowerName, isCases, isDeaths, isRecovers, casesDiff, deathsDiff, recoversDiff } = data;
		const { summaryData, lastUpdateDate, lastUpdateDateDisplay } = country;
		const sourceSummaryData = summaryData.summaryDataList[lowerName];
		const totalSummaryData = summaryData.totalSummaryData;
		sourceSummaryData.itemClassName = ' alert';
		if (isCases) {
			sourceSummaryData.dataItems[0] = this.setSummaryDataValues(sourceSummaryData.dataItems[0], casesDiff, null);
			totalSummaryData.dataItems[0] = this.setSummaryDataValues(totalSummaryData.dataItems[0], casesDiff, null);
		}
		if (isDeaths) {
			sourceSummaryData.dataItems[1] = this.setSummaryDataValues(sourceSummaryData.dataItems[1], deathsDiff, null);
			totalSummaryData.dataItems[1] = this.setSummaryDataValues(totalSummaryData.dataItems[1], deathsDiff, null);
		}
		if (isRecovers) {
			sourceSummaryData.dataItems[2] = this.setSummaryDataValues(sourceSummaryData.dataItems[2], recoversDiff, null);
			totalSummaryData.dataItems[2] = this.setSummaryDataValues(totalSummaryData.dataItems[2], recoversDiff, null);
		}
		sourceSummaryData.dataItems[3] = this.setSummaryDataValues(sourceSummaryData.dataItems[3], null, null);
		totalSummaryData.dataItems[3] = this.setSummaryDataValues(totalSummaryData.dataItems[3], null, null);
		sourceSummaryData.dataItems[4] = this.setSummaryDataValues(sourceSummaryData.dataItems[4], lastUpdateDate, lastUpdateDateDisplay);
		totalSummaryData.dataItems[4] = this.setSummaryDataValues(totalSummaryData.dataItems[4], lastUpdateDate, lastUpdateDateDisplay);
		summaryData.summaryDataList[lowerName] = sourceSummaryData;
		summaryData.totalSummaryData = totalSummaryData;
		country.summaryData = summaryData;
		return country;
	}

	updateData(data) {
		const { source, casesPair, deathsPair, recoversPair } = data;
		let { country } = data;
		const { lowerName, upperName } = source;
		let isCases = false;
		let isDeaths = false;
		let isRecovers = false;
		const sourceData = country.sourcesData[lowerName];
		if (sourceData) {
			const [casesDiff, casesUpdateType] = this.getDifference(sourceData.dataItems[0].count, casesPair[0]);
			const [deathsDiff, deathsUpdateType] = this.getDifference(sourceData.dataItems[1].count, deathsPair[0]);
			const [recoversDiff, recoversUpdateType] = this.getDifference(sourceData.dataItems[2].count, recoversPair[0]);
			isCases = casesDiff > 0;
			isDeaths = deathsDiff > 0;
			isRecovers = recoversDiff > 0;
			if (isCases || isDeaths || isRecovers) {
				country.updateSourceData = new UpdateSourceDataModel({
					sourceName: lowerName,
					cases: new UpdateSourceDataItemModel({
						type: SourceNumberType.CASE,
						iconName: 'cases',
						updateType: casesUpdateType,
						valuesPair: isCases ? [casesDiff, textUtils.getStringCommaFromNumber(casesDiff)] : null
					}),
					deaths: new UpdateSourceDataItemModel({
						type: SourceNumberType.DEATH,
						iconName: 'deaths',
						updateType: deathsUpdateType,
						valuesPair: isDeaths ? [deathsDiff, textUtils.getStringCommaFromNumber(deathsDiff)] : null
					}),
					recovers: new UpdateSourceDataItemModel({
						type: SourceNumberType.RECOVER,
						iconName: 'recovers',
						updateType: recoversUpdateType,
						valuesPair: isRecovers ? [recoversDiff, textUtils.getStringCommaFromNumber(recoversDiff)] : null
					})
				});
				country.boxClassName = this.getBoxClassName(casesDiff, deathsDiff, recoversDiff);
				country.updatesCount++;
				country.updatesCountDisplay = textUtils.getStringCommaFromNumber(country.updatesCount);
				country.lastUpdateDate = timeUtils.getCurrentTime();
				country.lastUpdateSourceName = upperName;
				country.statisticsData[2].value = country.updatesCountDisplay;
				country = this.setSummaryData({
					country: country,
					lowerName: lowerName,
					isCases: isCases,
					isDeaths: isDeaths,
					isRecovers: isRecovers,
					casesDiff: casesDiff,
					deathsDiff: deathsDiff,
					recoversDiff: recoversDiff
				});
				if (this.isCountriesLog) {
					console.log(`${lowerName} | ${country.displayName}`);
					console.log(country.updateSourceData);
				}
			}
		}
		country = countryCommonLogicService.setSourceData(country, {
			lowerName: lowerName,
			isCases: isCases,
			casesPair: casesPair,
			isDeaths: isDeaths,
			deathsPair: deathsPair,
			isRecovers: isRecovers,
			recoversPair: recoversPair
		});
		return country;
	}

	pop1SyncData(data) {
		const { fetchDataResults, countriesList } = data;
		const { source, resultData } = fetchDataResults;
		const parser = new DOMParser();
		const parsedHtml = parser.parseFromString(resultData, 'text/html');
		const elements = parsedHtml.getElementsByTagName('tr');
		let index = 0;
		// World.
		const worldElement = parsedHtml.getElementsByClassName('center')[0];
		const worldPopulation = worldElement.children[0].textContent.split(':')[1].trim();
		const worldPopulationPair = [textUtils.getNumberFromStringComma(worldPopulation), worldPopulation];
		const world = countriesList[countriesData.worldCountryId];
		world.dynamicPopulationCount = worldPopulationPair[0];
		world.populationCountDisplay = worldPopulationPair[1];
		world.populationCount = world.dynamicPopulationCount;
		countriesList[countriesData.worldCountryId] = world;
		index++;
		// Other.
		const other = countriesList[countriesData.otherCountryId];
		other.populationCount = other.staticPopulationCount;
		countriesList[countriesData.otherCountryId] = other;
		// Countries.
		for (let i = 1; i < 1000; i++) {
			let element = elements[i];
			if (!element) {
				break;
			}
			element = element.childNodes[0];
			let countryName = this.getCountryName(element, 1);
			if (!countryName) {
				continue;
			}
			countryName = countryName.trim();
			if (countryName === 'Population') {
				break;
			}
			const countryId = countriesData.sourcesCountriesList[source.lowerName][countryName];
			const country = countriesList[countryId];
			if (!country) {
				continue;
			}
			if (country.staticPopulationCount) {
				country.populationCount = country.staticPopulationCount;
			}
			else {
				const populationPair = this.getCountryPairValues(element, 2);
				country.dynamicPopulationCount = populationPair[0];
				country.populationCountDisplay = populationPair[1];
				country.populationCount = country.dynamicPopulationCount;
			}
			country.populationPercentageDisplay = textUtils.getPercentageDisplay(country.populationCount, world.dynamicPopulationCount);
			countriesList[countryId] = country;
			index++;
		}
		fetchDataResults.resultData = countriesList;
		fetchDataResults.updateCountryType = UpdateCountryType.POPULATION;
		fetchDataResults.isValidRowsCount = source.excpectedRowsCount === index;
		return fetchDataResults;
	}

	pop2SyncData(data) {
		const { fetchDataResults, countriesList } = data;
		const { source, resultData } = fetchDataResults;
		const parser = new DOMParser();
		const parsedHtml = parser.parseFromString(resultData.parse.text, 'text/html');
		const mainElement = parsedHtml.getElementsByClassName('wikitable');
		const elements = mainElement[0].getElementsByTagName('tr');
		const world = countriesList[countriesData.worldCountryId];
		// Countries + World.
		let index = 0;
		for (let i = 1; i < 1000; i++) {
			let element = elements[i];
			if (!element) {
				continue;
			}
			element = element.childNodes[1];
			let countryName = this.getCountryName(element, 1);
			if (!countryName) {
				continue;
			}
			index++;
			countryName = (countryName.indexOf('[') > -1 ? countryName.split('[')[0] : countryName).trim();
			const countryId = countriesData.sourcesCountriesList[source.lowerName][countryName];
			if (!countryId) {
				continue;
			}
			const country = countriesList[countryId];
			if (!country) {
				continue;
			}
			if (country.staticPopulationCount) {
				country.populationCount = country.staticPopulationCount;
			}
			else {
				const populationPair = this.getCountryPairValues(element, 2);
				country.dynamicPopulationCount = populationPair[0];
				country.populationCountDisplay = populationPair[1];
				country.populationCount = country.dynamicPopulationCount;
			}
			country.populationPercentageDisplay = textUtils.getPercentageDisplay(country.populationCount, world.dynamicPopulationCount);
			countriesList[countryId] = country;
		}
		fetchDataResults.resultData = countriesList;
		fetchDataResults.updateCountryType = UpdateCountryType.POPULATION;
		fetchDataResults.isValidRowsCount = source.excpectedRowsCount === index;
		return fetchDataResults;
	}

	cacSyncData(data) {
		const { fetchDataResults, countriesList } = data;
		let { source, resultData } = fetchDataResults;
		let updateCountryType = null;
		resultData = resultData.data;
		let totalCasesCount = 0;
		let totalDeathsCount = 0;
		let totalRecoversCount = 0;
		// Countries.
		let index = 0;
		for (let i = 0; i < resultData.length; i++) {
			const item = resultData[i];
			if (!item) {
				break;
			}
			index++;
			const countryId = countriesData.sourcesCountriesList[source.lowerName][item.name.trim()];
			if (!countryId) {
				continue;
			}
			let country = countriesList[countryId];
			if (!country) {
				break;
			}
			const pairs = this.getPairsFromNumbers([item.latest_data.confirmed, item.latest_data.deaths, item.latest_data.recovered]);
			country = this.updateData({
				country: country,
				source: source,
				casesPair: pairs[0],
				deathsPair: pairs[1],
				recoversPair: pairs[2]
			});
			countriesList[countryId] = country;
			if (!updateCountryType) {
				updateCountryType = country.updateSourceData !== null ? UpdateCountryType.DATA : null;
			}
			const sourceData = country.sourcesData[source.lowerName];
			totalCasesCount += textUtils.getNumberIfEmpty(sourceData.dataItems[0].count);
			totalDeathsCount += textUtils.getNumberIfEmpty(sourceData.dataItems[1].count);
			totalRecoversCount += textUtils.getNumberIfEmpty(sourceData.dataItems[2].count);
		}
		// World.
		index++;
		const pairs = this.getPairsFromNumbers([totalCasesCount, totalDeathsCount, totalRecoversCount]);
		countriesList[countriesData.worldCountryId] = this.updateData({
			country: countriesList[countriesData.worldCountryId],
			source: source,
			casesPair: pairs[0],
			deathsPair: pairs[1],
			recoversPair: pairs[2]
		});
		if (!updateCountryType) {
			updateCountryType = countriesList[countriesData.worldCountryId].updateSourceData !== null ? UpdateCountryType.DATA : null;
		}
		fetchDataResults.resultData = countriesList;
		fetchDataResults.updateCountryType = updateCountryType;
		fetchDataResults.isValidRowsCount = source.excpectedRowsCount === index;
		return fetchDataResults;
	}

	clnSyncData(data) {
		const { fetchDataResults, countriesList } = data;
		const { source, resultData } = fetchDataResults;
		let updateCountryType = null;
		let totalCasesCount = 0;
		let totalDeathsCount = 0;
		let totalRecoversCount = 0;
		let totalOtherCasesCount = 0;
		let totalOtherDeathsCount = 0;
		let totalOtherRecoversCount = 0;
		// Countries.
		let index = 0;
		for (let i = 0; i < resultData.length; i++) {
			const item = resultData[i];
			if (!item) {
				break;
			}
			index++;
			const countryId = countriesData.sourcesCountriesList[source.lowerName][item.country];
			if (!countryId) {
				continue;
			}
			let country = countriesList[countryId];
			if (!country) {
				break;
			}
			if (countryId === countriesData.otherCountryId) { // Other.
				totalOtherCasesCount += textUtils.getNumberIfEmpty(item.cases);
				totalOtherDeathsCount += textUtils.getNumberIfEmpty(item.deaths);
				totalOtherRecoversCount += textUtils.getNumberIfEmpty(item.recovered);
			}
			else {
				const pairs = this.getPairsFromNumbers([item.cases, item.deaths, item.recovered]);
				country = this.updateData({
					country: country,
					source: source,
					casesPair: pairs[0],
					deathsPair: pairs[1],
					recoversPair: pairs[2]
				});
				countriesList[countryId] = country;
				if (!updateCountryType) {
					updateCountryType = country.updateSourceData !== null ? UpdateCountryType.DATA : null;
				}
				const sourceData = country.sourcesData[source.lowerName];
				totalCasesCount += textUtils.getNumberIfEmpty(sourceData.dataItems[0].count);
				totalDeathsCount += textUtils.getNumberIfEmpty(sourceData.dataItems[1].count);
				totalRecoversCount += textUtils.getNumberIfEmpty(sourceData.dataItems[2].count);
			}
		}
		// Other.
		const otherPairs = this.getPairsFromNumbers([totalOtherCasesCount, totalOtherDeathsCount, totalOtherRecoversCount]);
		countriesList[countriesData.otherCountryId] = this.updateData({
			country: countriesList[countriesData.otherCountryId],
			source: source,
			casesPair: otherPairs[0],
			deathsPair: otherPairs[1],
			recoversPair: otherPairs[2]
		});
		if (!updateCountryType) {
			updateCountryType = countriesList[countriesData.otherCountryId].updateSourceData !== null ? UpdateCountryType.DATA : null;
		}
		// World.
		index++;
		const worldPairs = this.getPairsFromNumbers([totalCasesCount, totalDeathsCount, totalRecoversCount]);
		countriesList[countriesData.worldCountryId] = this.updateData({
			country: countriesList[countriesData.worldCountryId],
			source: source,
			casesPair: worldPairs[0],
			deathsPair: worldPairs[1],
			recoversPair: worldPairs[2]
		});
		if (!updateCountryType) {
			updateCountryType = countriesList[countriesData.worldCountryId].updateSourceData !== null ? UpdateCountryType.DATA : null;
		}
		fetchDataResults.resultData = countriesList;
		fetchDataResults.updateCountryType = updateCountryType;
		fetchDataResults.isValidRowsCount = source.excpectedRowsCount === index;
		return fetchDataResults;
	}

	coaSyncData(data) {
		const { fetchDataResults, countriesList } = data;
		const { source, resultData } = fetchDataResults;
		const { Global, Countries } = resultData;
		let updateCountryType = null;
		if (!Countries) {
			fetchDataResults.error = 'Empty Countries object';
			return fetchDataResults;
		}
		// Countries.
		let index = 0;
		for (let i = 0; i < Countries.length; i++) {
			const item = Countries[i];
			if (!item) {
				break;
			}
			index++;
			const countryId = countriesData.sourcesCountriesList[source.lowerName][item.Country];
			if (!countryId) {
				continue;
			}
			let country = countriesList[countryId];
			if (!country) {
				break;
			}
			const pairs = this.getPairsFromNumbers([item.TotalConfirmed, item.TotalDeaths, item.TotalRecovered]);
			country = this.updateData({
				country: country,
				source: source,
				casesPair: pairs[0],
				deathsPair: pairs[1],
				recoversPair: pairs[2]
			});
			countriesList[countryId] = country;
			if (!updateCountryType) {
				updateCountryType = country.updateSourceData !== null ? UpdateCountryType.DATA : null;
			}
		}
		// World.
		index++;
		const pairs = this.getPairsFromNumbers([Global.TotalConfirmed, Global.TotalDeaths, Global.TotalRecovered]);
		countriesList[countriesData.worldCountryId] = this.updateData({
			country: countriesList[countriesData.worldCountryId],
			source: source,
			casesPair: pairs[0],
			deathsPair: pairs[1],
			recoversPair: pairs[2]
		});
		if (!updateCountryType) {
			updateCountryType = countriesList[countriesData.worldCountryId].updateSourceData !== null ? UpdateCountryType.DATA : null;
		}
		fetchDataResults.resultData = countriesList;
		fetchDataResults.updateCountryType = updateCountryType;
		fetchDataResults.isValidRowsCount = source.excpectedRowsCount === index;
		return fetchDataResults;
	}

	cvaSyncData(data) {
		const { fetchDataResults, countriesList } = data;
		const { source, resultData } = fetchDataResults;
		let updateCountryType = null;
		let totalOtherCasesCount = 0;
		let totalOtherDeathsCount = 0;
		let totalOtherRecoversCount = 0;
		// Countries + World.
		let index = 0;
		for (let i = 0; i < resultData.length; i++) {
			const item = resultData[i];
			if (!item) {
				break;
			}
			index++;
			const countryId = countriesData.sourcesCountriesList[source.lowerName][item.country];
			if (!countryId) {
				continue;
			}
			let country = countriesList[countryId];
			if (!country) {
				break;
			}
			if (countryId === countriesData.otherCountryId) { // Other.
				totalOtherCasesCount += textUtils.getNumberIfEmpty(item.cases);
				totalOtherDeathsCount += textUtils.getNumberIfEmpty(item.deaths);
				totalOtherRecoversCount += textUtils.getNumberIfEmpty(item.recovered);
			}
			else {
				const pairs = this.getPairsFromNumbers([item.cases, item.deaths, item.recovered]);
				country = this.updateData({
					country: country,
					source: source,
					casesPair: pairs[0],
					deathsPair: pairs[1],
					recoversPair: pairs[2]
				});
				countriesList[countryId] = country;
				if (!updateCountryType) {
					updateCountryType = country.updateSourceData !== null ? UpdateCountryType.DATA : null;
				}
			}
		}
		// Other.
		const pairs = this.getPairsFromNumbers([totalOtherCasesCount, totalOtherDeathsCount, totalOtherRecoversCount]);
		countriesList[countriesData.otherCountryId] = this.updateData({
			country: countriesList[countriesData.otherCountryId],
			source: source,
			casesPair: pairs[0],
			deathsPair: pairs[1],
			recoversPair: pairs[2]
		});
		if (!updateCountryType) {
			updateCountryType = countriesList[countriesData.otherCountryId].updateSourceData !== null ? UpdateCountryType.DATA : null;
		}
		fetchDataResults.resultData = countriesList;
		fetchDataResults.updateCountryType = updateCountryType;
		fetchDataResults.isValidRowsCount = source.excpectedRowsCount === index;
		return fetchDataResults;
	}

	cvsSyncData(data) {
		const { fetchDataResults, countriesList } = data;
		const { source, resultData } = fetchDataResults;
		const { rows } = resultData.data;
		let updateCountryType = null;
		// Countries + World.
		let index = 0;
		for (let i = 0; i < rows.length; i++) {
			const item = rows[i];
			if (!item) {
				break;
			}
			index++;
			const countryId = countriesData.sourcesCountriesList[source.lowerName][item.country];
			if (!countryId) {
				continue;
			}
			let country = countriesList[countryId];
			if (!country) {
				break;
			}
			const pairs = this.getPairsFromStrings([item.total_cases, item.total_deaths, item.total_recovered]);
			country = this.updateData({
				country: country,
				source: source,
				casesPair: pairs[0],
				deathsPair: pairs[1],
				recoversPair: pairs[2]
			});
			countriesList[countryId] = country;
			if (!updateCountryType) {
				updateCountryType = country.updateSourceData !== null ? UpdateCountryType.DATA : null;
			}
		}
		fetchDataResults.resultData = countriesList;
		fetchDataResults.updateCountryType = updateCountryType;
		fetchDataResults.isValidRowsCount = source.excpectedRowsCount === index;
		return fetchDataResults;
	}

	gooSyncData(data) {
		const { fetchDataResults, countriesList } = data;
		const { source, resultData } = fetchDataResults;
		let updateCountryType = null;
		const parser = new DOMParser();
		const parsedHtml = parser.parseFromString(resultData, 'text/html');
		let totalCasesCount = 0;
		let totalDeathsCount = 0;
		let totalRecoversCount = 0;
		// Countries.
		let index = 0;
		for (let i = 0; i < 1000; i++) {
			const element = parsedHtml.getElementById(`0R${i + 1}`);
			const countryName = this.getCountryName(element, 2);
			if (!countryName || countryName === 'Noname1') {
				break;
			}
			index++;
			const countryId = countriesData.sourcesCountriesList[source.lowerName][countryName];
			if (!countryId) {
				continue;
			}
			let country = countriesList[countryId];
			if (!country) {
				break;
			}
			country = this.updateData({
				country: country,
				source: source,
				casesPair: this.getCountryPairValues(element, 3),
				deathsPair: this.getCountryPairValues(element, 4),
				recoversPair: this.getCountryPairValues(element, 5)
			});
			countriesList[countryId] = country;
			if (!updateCountryType) {
				updateCountryType = country.updateSourceData !== null ? UpdateCountryType.DATA : null;
			}
			const sourceData = country.sourcesData[source.lowerName];
			totalCasesCount += textUtils.getNumberIfEmpty(sourceData.dataItems[0].count) ? sourceData.dataItems[0].count : 0;
			totalDeathsCount += textUtils.getNumberIfEmpty(sourceData.dataItems[1].count) ? sourceData.dataItems[1].count : 0;
			totalRecoversCount += textUtils.getNumberIfEmpty(sourceData.dataItems[2].count) ? sourceData.dataItems[2].count : 0;
		}
		// World.
		index++;
		const pairs = this.getPairsFromNumbers([totalCasesCount, totalDeathsCount, totalRecoversCount]);
		countriesList[countriesData.worldCountryId] = this.updateData({
			country: countriesList[countriesData.worldCountryId],
			source: source,
			casesPair: pairs[0],
			deathsPair: pairs[1],
			recoversPair: pairs[2]
		});
		if (!updateCountryType) {
			updateCountryType = countriesList[countriesData.worldCountryId].updateSourceData !== null ? UpdateCountryType.DATA : null;
		}
		fetchDataResults.resultData = countriesList;
		fetchDataResults.updateCountryType = updateCountryType;
		fetchDataResults.isValidRowsCount = source.excpectedRowsCount === index;
		return fetchDataResults;
	}

	wikSyncData(data) {
		const { fetchDataResults, countriesList } = data;
		const { source, resultData } = fetchDataResults;
		let updateCountryType = null;
		const parser = new DOMParser();
		const parsedHtml = parser.parseFromString(resultData.parse.text, 'text/html');
		const mainElement = parsedHtml.getElementById('thetable');
		const rows = mainElement.getElementsByTagName('tr');
		let totalOtherCasesCount = 0;
		let totalOtherDeathsCount = 0;
		let totalOtherRecoversCount = 0;
		// Countries + World.
		let index = 0;
		for (let i = 1; i < rows.length; i++) {
			if (!rows[i]) {
				break;
			}
			const nameElement = rows[i].children[1];
			if (!nameElement) {
				break;
			}
			index++;
			if (!nameElement.children[0]) {
				break;
			}
			const countryId = countriesData.sourcesCountriesList[source.lowerName][i === 1 ? 'World' : nameElement.children[0].textContent];
			if (!countryId) {
				continue;
			}
			let country = countriesList[countryId];
			if (!country) {
				break;
			}
			if (countryId === countriesData.otherCountryId) { // Other.
				totalOtherCasesCount += textUtils.getNumberIfEmpty(this.getCountryCountValue(nameElement, 1));
				totalOtherDeathsCount += textUtils.getNumberIfEmpty(this.getCountryCountValue(nameElement, 2));
				totalOtherRecoversCount += textUtils.getNumberIfEmpty(this.getCountryCountValue(nameElement, 3));
			}
			else {
				country = this.updateData({
					country: country,
					source: source,
					casesPair: this.getCountryPairValues(nameElement, 1),
					deathsPair: this.getCountryPairValues(nameElement, 2),
					recoversPair: this.getCountryPairValues(nameElement, 3)
				});
				countriesList[countryId] = country;
				if (!updateCountryType) {
					updateCountryType = country.updateSourceData !== null ? UpdateCountryType.DATA : null;
				}
			}
		}
		// Other.
		const pairs = this.getPairsFromNumbers([totalOtherCasesCount, totalOtherDeathsCount, totalOtherRecoversCount]);
		countriesList[countriesData.otherCountryId] = this.updateData({
			country: countriesList[countriesData.otherCountryId],
			source: source,
			casesPair: pairs[0],
			deathsPair: pairs[1],
			recoversPair: pairs[2]
		});
		if (!updateCountryType) {
			updateCountryType = countriesList[countriesData.otherCountryId].updateSourceData !== null ? UpdateCountryType.DATA : null;
		}
		fetchDataResults.resultData = countriesList;
		fetchDataResults.updateCountryType = updateCountryType;
		fetchDataResults.isValidRowsCount = source.excpectedRowsCount === index;
		return fetchDataResults;
	}

	wodSyncData(data) {
		const { fetchDataResults, countriesList } = data;
		const { source, resultData } = fetchDataResults;
		let updateCountryType = null;
		const parser = new DOMParser();
		const parsedHtml = parser.parseFromString(resultData, 'text/html');
		let totalCasesCount = 0;
		let totalDeathsCount = 0;
		let totalRecoversCount = 0;
		// Countries.
		let index = 0;
		for (let i = 1; i < 1000; i++) {
			const element = parsedHtml.getElementById(`449840684R${i + 1}`);
			const countryName = this.getCountryName(element, 28);
			if (!countryName) {
				break;
			}
			index++;
			const countryId = countriesData.sourcesCountriesList[source.lowerName][countryName];
			if (!countryId) {
				continue;
			}
			let country = countriesList[countryId];
			if (!country) {
				break;
			}
			country = this.updateData({
				country: country,
				source: source,
				casesPair: this.getCountryPairValues(element, 12),
				deathsPair: this.getCountryPairValues(element, 11),
				recoversPair: this.getCountryPairValues(element, 16)
			});
			countriesList[countryId] = country;
			if (!updateCountryType) {
				updateCountryType = country.updateSourceData !== null ? UpdateCountryType.DATA : null;
			}
			const sourceData = country.sourcesData[source.lowerName];
			totalCasesCount += textUtils.getNumberIfEmpty(sourceData.dataItems[0].count) ? sourceData.dataItems[0].count : 0;
			totalDeathsCount += textUtils.getNumberIfEmpty(sourceData.dataItems[1].count) ? sourceData.dataItems[1].count : 0;
			totalRecoversCount += textUtils.getNumberIfEmpty(sourceData.dataItems[2].count) ? sourceData.dataItems[2].count : 0;
		}
		// World.
		index++;
		const pairs = this.getPairsFromNumbers([totalCasesCount, totalDeathsCount, totalRecoversCount]);
		countriesList[countriesData.worldCountryId] = this.updateData({
			country: countriesList[countriesData.worldCountryId],
			source: source,
			casesPair: pairs[0],
			deathsPair: pairs[1],
			recoversPair: pairs[2]
		});
		if (!updateCountryType) {
			updateCountryType = countriesList[countriesData.worldCountryId].updateSourceData !== null ? UpdateCountryType.DATA : null;
		}
		fetchDataResults.resultData = countriesList;
		fetchDataResults.updateCountryType = updateCountryType;
		fetchDataResults.isValidRowsCount = source.excpectedRowsCount === index;
		return fetchDataResults;
	}

	compareCountryProps(prevProps, nextProps) {
		// ToDo: Since only country object is compared,
		// when sources list updated, need to re-render all countries.
		return JSON.stringify(prevProps) === JSON.stringify(nextProps);
	}

	getLocalData(data) {
		return new Promise(async (resolve, reject) => {
			if (reject) { }
			const { fetchDataResults, countriesList, countriesKeysList, isInitiateComplete } = data;
			const { source } = fetchDataResults;
			fetchDataResults.resultData = data.countriesList;
			fetchDataResults.updateCountryType = null;
			fetchDataResults.isValidRowsCount = true;
			if (!source.isCovidData) {
				resolve(fetchDataResults);
				return;
			}
			const countriesResult = await localService.createData({
				countriesList: countriesList,
				countriesKeysList: countriesKeysList,
				isInitiateComplete: isInitiateComplete,
				source: source
			});
			if (!countriesResult) {
				resolve(fetchDataResults);
				return;
			}
			const { updatedCountriesList, totalNumberValues } = countriesResult;
			for (let i = 0; i < updatedCountriesList.length; i++) {
				const localCountry = updatedCountriesList[i];
				if (!localCountry || localCountry.id === countriesData.worldCountryId) {
					continue;
				}
				let country = countriesList[localCountry.id];
				if (!country || country.id === countriesData.worldCountryId || !country.isContainData) {
					continue;
				}
				const sourceData = localCountry.source;
				if (sourceData) {
					country = this.updateData({
						country: country,
						source: source,
						casesPair: countryCommonLogicService.getNumberArray(sourceData[0]),
						deathsPair: countryCommonLogicService.getNumberArray(sourceData[1]),
						recoversPair: countryCommonLogicService.getNumberArray(sourceData[2])
					});
					countriesList[country.id] = country;
				}
			}
			// World.
			const pairs = this.getPairsFromNumbers(totalNumberValues);
			countriesList[countriesData.worldCountryId] = this.updateData({
				country: countriesList[countriesData.worldCountryId],
				source: source,
				casesPair: pairs[0],
				deathsPair: pairs[1],
				recoversPair: pairs[2]
			});
			fetchDataResults.resultData = countriesList;
			resolve(fetchDataResults);
		}).catch(e => console.log(e));
	}

	async localSyncData(data) {
		localService.initiate(countriesData.worldCountryId, data.isInitiateComplete);
		return await this.getLocalData(data);
	}
}

export default new CountryService();