class SourceModel {

	constructor(data) {
		const { lowerName, upperName, apiURL, isJSON, expectedRowsCount, order, isActive, isCovidData } = data;
		this.lowerName = lowerName;
		this.upperName = upperName;
		this.apiURL = apiURL;
		this.isJSON = isJSON;
		this.expectedRowsCount = expectedRowsCount;
		this.order = order;
		this.isActive = isActive;
		this.isError = null;
		this.isSelect = null;
		this.isCovidData = isCovidData;
		// Set default values.
		this.setDefaultValues();
	}

	setDefaultValues() {
		this.isError = false;
		this.isSelect = true;
	}
}

export default SourceModel;