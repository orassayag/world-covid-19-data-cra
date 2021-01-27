import settings from '../../settings/settings';
import { SourceModel } from '../../core/models';
import { SourceName } from '../../core/enums';

class SourcesData {

	constructor() {
		const { POP1_API_URL, POP2_API_URL, CAC_API_URL, CLN_API_URL, COA_API_URL, CVA_API_URL, CVS_API_URL, GOO_API_URL,
			WIK_API_URL, WOD_API_URL } = settings;
		// Note: Don't change the order of the sources,
		// it's important for the population calculation logic.
		this.sourcesList = {
			[SourceName.POP1]: new SourceModel({
				lowerName: SourceName.POP1,
				upperName: SourceName.POP1.toUpperCase(),
				apiURL: POP1_API_URL,
				isJSON: false,
				excpectedRowsCount: 233,
				order: 1,
				isActive: true,
				isCovidData: false
			}),
			[SourceName.POP2]: new SourceModel({
				lowerName: SourceName.POP2,
				upperName: SourceName.POP2.toUpperCase(),
				apiURL: POP2_API_URL,
				isJSON: false,
				excpectedRowsCount: 242,
				order: 2,
				isActive: true,
				isCovidData: false
			}),
			[SourceName.CAC]: new SourceModel({
				lowerName: SourceName.CAC,
				upperName: SourceName.CAC.toUpperCase(),
				apiURL: CAC_API_URL,
				isJSON: true,
				excpectedRowsCount: 250,
				order: 3,
				isActive: true,
				isCovidData: true
			}),
			[SourceName.CLN]: new SourceModel({
				lowerName: SourceName.CLN,
				upperName: SourceName.CLN.toUpperCase(),
				apiURL: CLN_API_URL,
				isJSON: true,
				excpectedRowsCount: 216,
				order: 4,
				isActive: true,
				isCovidData: true
			}),
			[SourceName.COA]: new SourceModel({
				lowerName: SourceName.COA,
				upperName: SourceName.COA.toUpperCase(),
				apiURL: COA_API_URL,
				isJSON: true,
				excpectedRowsCount: 187,
				order: 5,
				isActive: true,
				isCovidData: true
			}),
			[SourceName.CVA]: new SourceModel({
				lowerName: SourceName.CVA,
				upperName: SourceName.CVA.toUpperCase(),
				apiURL: CVA_API_URL,
				isJSON: true,
				excpectedRowsCount: 216,
				order: 6,
				isActive: true,
				isCovidData: true
			}),
			[SourceName.CVS]: new SourceModel({
				lowerName: SourceName.CVS,
				upperName: SourceName.CVS.toUpperCase(),
				apiURL: CVS_API_URL,
				isJSON: true,
				excpectedRowsCount: 200,
				order: 7,
				isActive: true,
				isCovidData: true
			}),
			[SourceName.GOO]: new SourceModel({
				lowerName: SourceName.GOO,
				upperName: SourceName.GOO.toUpperCase(),
				apiURL: GOO_API_URL,
				isJSON: false,
				excpectedRowsCount: 229,
				order: 8,
				isActive: true,
				isCovidData: true
			}),
			[SourceName.WIK]: new SourceModel({
				lowerName: SourceName.WIK,
				upperName: SourceName.WIK.toUpperCase(),
				apiURL: WIK_API_URL,
				isJSON: false,
				excpectedRowsCount: 229,
				order: 9,
				isActive: true,
				isCovidData: true
			}),
			[SourceName.WOD]: new SourceModel({
				lowerName: SourceName.WOD,
				upperName: SourceName.WOD.toUpperCase(),
				apiURL: WOD_API_URL,
				isJSON: false,
				excpectedRowsCount: 99,
				order: 10,
				isActive: true,
				isCovidData: true
			})
		};
	}
}

export default new SourcesData();