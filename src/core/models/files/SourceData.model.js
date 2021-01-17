class SourceDataModel {

	constructor(data) {
		const { cases, deaths, recovers } = data;
		this.dataItems = [cases, deaths, recovers];
	}
}

export default SourceDataModel;