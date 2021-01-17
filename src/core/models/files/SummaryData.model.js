class SummaryDataModel {

	constructor(data) {
		const { cases, deaths, recovers, updates, lastUpdateTime } = data;
		this.itemClassName = null;
		this.dataItems = [cases, deaths, recovers, updates, lastUpdateTime];
		// Set default values.
		this.setDefaultValues();
	}

	setDefaultValues() {
		this.itemClassName = '';
	}
}

export default SummaryDataModel;