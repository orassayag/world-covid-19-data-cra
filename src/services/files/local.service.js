import settings from '../../settings/settings';
import { localData } from '../../data';
import { LocalCountryResultModel } from '../../core/models';
import countryCommonLogicService from './countryCommonLogic.service';
import { textUtils } from '../../utils';

class LocalDataService {

    constructor() {
        this.isInitiate = false;
        this.worldCountryId = null;
        this.maximumRandomRounds = null;
        this.lastRoundNumbersList = null;
        this.simulateLocalUpdatePercentage = null;
        this.simulateLocalMaximumCountriesPerRound = null;
        this.simulateLocalMaximumValuePerUpdate = null;
    }

    initiate(worldCountryId) {
        if (this.isInitiate) {
            return;
        }
        const { SIMULATE_LOCAL_UPDATE_PERCENTAGE, SIMULATE_LOCAL_MAXIMUM_COUNTRIES_PER_ROUND,
            SIMULATE_LOCAL_MAXIMUM_NUMBER_PER_VALUE, SIMULATE_LOCAL_MILLISECONDS_DELAY_PER_ROUND } = settings;
        this.maximumRandomRounds = 50;
        this.lastRoundNumbersList = new Set();
        this.simulateLocalUpdatePercentage = SIMULATE_LOCAL_UPDATE_PERCENTAGE;
        this.simulateLocalMaximumCountriesPerRound = SIMULATE_LOCAL_MAXIMUM_COUNTRIES_PER_ROUND;
        this.simulateLocalMaximumNumberPerValue = SIMULATE_LOCAL_MAXIMUM_NUMBER_PER_VALUE;
        this.simulateLocalMillisecondsDelayPerRound = SIMULATE_LOCAL_MILLISECONDS_DELAY_PER_ROUND;
        this.worldCountryId = worldCountryId;
        localData.initiate();
        this.isInitiate = true;
    }

    initiateLocalData(data) {
        const { source, countriesList, countriesKeysList } = data;
        return new Promise((resolve, reject) => {
            if (reject) { }
            const { lowerName } = source;
            let totalNumberValues = [0, 0, 0];
            const world = localData.countriesList[this.worldCountryId];
            if (!world) {
                resolve(null);
            }
            for (let i = 0; i < countriesKeysList.length; i++) {
                const countryId = parseInt(countriesKeysList[i]);
                const localCountry = localData.countriesList[countryId];
                const country = countriesList[countryId];
                if (!country.isContainData) {
                    continue;
                }
                if (country.populationCount === 0 && localCountry.populationCount > 0) {
                    const populationValuePair = countryCommonLogicService.getNumberArray(localCountry.populationCount);
                    country.populationCount = populationValuePair[0];
                    country.populationCountDisplay = populationValuePair[1];
                    country.populationPercentageDisplay = textUtils.getPercentageDisplay(country.populationCount, world.populationCount);
                }
                let localSourceData = localCountry.sourcesData[lowerName];
                if (!localSourceData) {
                    localSourceData = [null, null, null];
                }
                countriesList[countryId] = countryCommonLogicService.setSourceData(country, {
                    lowerName: lowerName,
                    isCases: false,
                    casesPair: countryCommonLogicService.getNumberArray(localSourceData[0]),
                    isDeaths: false,
                    deathsPair: countryCommonLogicService.getNumberArray(localSourceData[1]),
                    isRecovers: false,
                    recoversPair: countryCommonLogicService.getNumberArray(localSourceData[2])
                });
                if (countryId === this.worldCountryId) {
                    totalNumberValues = localSourceData;
                }
            }
            resolve({
                updatedCountriesList: Object.values(countriesList),
                totalNumberValues: totalNumberValues
            });
        }).catch(e => console.log(e));
    }

    createRandomCountriesList() {
        // Get random countries list to update (not include world).
        let numbersList = new Set();
        let index = 0;
        const countriesCount = textUtils.getRandomNumber(1, this.simulateLocalMaximumCountriesPerRound);
        while (numbersList.size < countriesCount && index < this.maximumRandomRounds) {
            const number = textUtils.getRandomNumber(0, localData.countriesKeysList.length);
            if (!this.lastRoundNumbersList.has(number)) {
                numbersList.add(number);
            }
            index++;
        }
        // Remove the world country id.
        numbersList.delete(this.worldCountryId);
        this.lastRoundNumbersList = numbersList;
        numbersList = [...numbersList];
        const randomCountriesList = {};
        const randomCountriesListKeys = [];
        for (let i = 0; i < numbersList.length; i++) {
            const localCountry = localData.countriesList[numbersList[i]];
            if (localCountry) {
                const countryId = localCountry.id;
                randomCountriesList[countryId] = new LocalCountryResultModel(countryId);
                randomCountriesListKeys.push(countryId);
            }
        }
        return {
            randomCountriesList: randomCountriesList,
            randomCountriesListKeys: randomCountriesListKeys
        };
    }

    createRandomValue() {
        return textUtils.getRandomNumber(1, this.simulateLocalMaximumNumberPerValue);
    }

    createRandomSource() {
        const randomSource = [];
        let isTruthy = false;
        for (let i = 0; i < 3; i++) {
            if (textUtils.getRandomBoolean()) {
                isTruthy = true;
                randomSource.push(this.createRandomValue());
            }
            else {
                randomSource.push(null);
            }
        }
        if (!isTruthy) {
            randomSource[textUtils.getRandomNumber(0, 2)] = this.createRandomValue();
        }
        return randomSource;
    }

    createCompareSourcesValue(data) {
        const { index, originalSource, randomSource } = data;
        if (!originalSource || originalSource.dataItems.length === 0) {
            return null;
        }
        const originalNumberValue = originalSource.dataItems[index].count;
        let addedNumberValue = randomSource[index];
        let updatedNumberValue = 0;
        if (textUtils.isInvalidNumber(originalNumberValue)) {
            return null;
        }
        if (textUtils.isInvalidNumber(addedNumberValue)) {
            addedNumberValue = 0;
            updatedNumberValue = originalNumberValue;
        }
        else {
            updatedNumberValue = originalNumberValue + addedNumberValue;
        }
        return {
            addedNumberValue: addedNumberValue,
            updatedNumberValue: updatedNumberValue
        };
    }

    createCompareWorldValue(data) {
        const { originalSource, totalNumberValues } = data;
        if (!originalSource || originalSource.dataItems.length === 0) {
            return null;
        }
        for (let i = 0; i < totalNumberValues.length; i++) {
            const originalNumberValue = originalSource.dataItems[i].count;
            const addedNumberValue = totalNumberValues[i];
            let updatedNumberValue = 0;
            if (textUtils.isInvalidNumber(originalNumberValue)) {
                return null;
            }
            if (textUtils.isInvalidNumber(addedNumberValue)) {
                updatedNumberValue = originalNumberValue;
            }
            else {
                updatedNumberValue = originalNumberValue + addedNumberValue;
            }
            totalNumberValues[i] = updatedNumberValue;
        }
        return totalNumberValues;
    }

    createRandomValuePairs(data) {
        const { country, randomCountry, totalNumberValues, lowerName } = data;
        if (!country || !country.isContainData || !country.sourcesData) {
            return {
                randomCountry: randomCountry,
                totalNumberValues: totalNumberValues
            };
        }
        const originalSource = country.sourcesData[lowerName];
        let randomSource = this.createRandomSource(country);
        for (let i = 0; i < 3; i++) {
            const compareSourcesValueResult = this.createCompareSourcesValue({
                index: i,
                originalSource: originalSource,
                randomSource: randomSource
            });
            if (compareSourcesValueResult) {
                totalNumberValues[i] += compareSourcesValueResult.addedNumberValue;
                randomSource[i] = compareSourcesValueResult.updatedNumberValue;
            }
            else {
                randomSource[i] = null;
            }
        }
        randomCountry.source = randomSource;
        return {
            randomCountry: randomCountry,
            totalNumberValues: totalNumberValues
        };
    }

    createRandomValues(data) {
        const { lowerName, countriesList, randomCountriesList, randomCountriesListKeys } = data;
        let totalNumberValues = [0, 0, 0];
        for (let i = 0; i < randomCountriesListKeys.length; i++) {
            const countryId = randomCountriesListKeys[i];
            const createRandomValuePairsResult = this.createRandomValuePairs({
                country: countriesList[countryId],
                randomCountry: randomCountriesList[countryId],
                totalNumberValues: totalNumberValues,
                lowerName: lowerName
            });
            totalNumberValues = [...createRandomValuePairsResult.totalNumberValues];
            randomCountriesList[countryId] = createRandomValuePairsResult.randomCountry;
        }
        const world = countriesList[this.worldCountryId];
        totalNumberValues = this.createCompareWorldValue({
            originalSource: world.sourcesData[lowerName],
            totalNumberValues: totalNumberValues
        });
        return {
            updatedCountriesList: Object.values(randomCountriesList),
            totalNumberValues: totalNumberValues
        };
    }

    async createData(data) {
        if (!data.isInitiateComplete) {
            return await this.getOriginalData(data);
        }
        if (!textUtils.getRandomBooleanByPercentage(this.simulateLocalUpdatePercentage)) {
            return null;
        }
        return this.getRandomData(data);
    }

    async getOriginalData(data) {
        const { countriesList, countriesKeysList, source } = data;
        const originalDataValues = await this.initiateLocalData({
            source: source,
            countriesList: countriesList,
            countriesKeysList: countriesKeysList
        });
        return originalDataValues;
    }

    getRandomData(data) {
        const { countriesList, source } = data;
        const { randomCountriesList, randomCountriesListKeys } = this.createRandomCountriesList();
        const randomDataValues = this.createRandomValues({
            lowerName: source.lowerName,
            countriesList: countriesList,
            randomCountriesList: randomCountriesList,
            randomCountriesListKeys: randomCountriesListKeys
        });
        return randomDataValues;
    }
}

export default new LocalDataService();