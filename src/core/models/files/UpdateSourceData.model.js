class UpdateSourceDataModel {

    constructor(data) {
        const { sourceName, cases, deaths, recovers } = data;
        this.sourceName = sourceName;
        this.dataItems = [cases, deaths, recovers];
    }
}

export default UpdateSourceDataModel;