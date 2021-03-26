import { countriesData } from '../../data';
import { SourceName } from '../../core/enums';
import { timeUtils } from '../../utils';

class TestService {

	constructor() { }

	async testLogicSources(maxSourceIndex) {
		let countriesList = countriesData.countriesList;
		const sources = Object.values(SourceName);
		for (let i = 0; i < sources.length; i++) {
			const src = sources[i];
			console.log(src);
			const { data } = await this.getData({
				source: src,
				countriesList: countriesList
			});
			countriesList = data;
			if (i === maxSourceIndex) {
				break;
			}
		}
		countriesList = this.finalizeData(countriesList);
	}

	async testFlowSources() {
		console.log('Initiate start.');
		let countriesList = countriesData.countriesList;
		const sources = Object.values(SourceName);
		for (let i = 0; i < sources.length; i++) {
			const src = sources[i];
			const { data } = await this.getData({
				source: src,
				countriesList: countriesList
			});
			countriesList = data;
		}
		countriesList = this.finalizeData(countriesList);
		console.log('Initiate end.');
		let timer, i = 0;
		const maximum = sources.length;
		const transition = async () => {
			clearTimeout(timer);
			if (i === maximum) {
				i = 0;
			}
			const source = sources[i];
			const { data } = await this.getData({
				source: source,
				countriesList: countriesList
			});
			countriesList = data;
			const dateNow = timeUtils.getCurrentTime();
			console.log(`${timeUtils.getTimeDisplay(dateNow)} | ${source}`);
			console.log(Object.values(countriesList).filter(c => c.updateSourceData !== null).map(c => { return { name: c.displayName, updateSourceData: c.updateSourceData }; }));
			countriesList = this.clearCurrentUpdates(countriesList);
			i++;
			timer = setTimeout(transition, 30 * 1000);
		};
		await transition();
	}
}

export default new TestService();