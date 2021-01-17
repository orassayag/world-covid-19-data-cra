class LocalCountryModel {

    constructor(data) {
        const { id, populationCount, sourcesData } = data;
        this.id = id;
        this.populationCount = populationCount;
        this.sourcesData = sourcesData;
    }
}

export default LocalCountryModel;