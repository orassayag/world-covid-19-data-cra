import { creditsData } from '../../data';
import { CreditSortType } from '../../core/enums';
import { logicUtils } from '../../utils';

class CreditService {

    constructor() {
        this.masterCredits = this.getCreditsList({
            filterOptions: {
                isMaster: [true]
            },
            sortType: CreditSortType.ORDER
        });
        this.allCredits = this.getCreditsList({
            filterOptions: null,
            sortType: CreditSortType.ORDER
        });
    }

    getCreditsList(options) {
        let creditsList = creditsData.creditsList;
        // Filter.
        creditsList = this.filter(creditsList, options);
        // Sort.
        creditsList = this.sort(creditsList, options);
        return creditsList;
    }

    filter(creditsList, options) {
        if (!options.filterOptions) {
            return creditsList;
        }
        return logicUtils.filter(creditsList, options.filterOptions);
    }

    sort(creditsList, options) {
        if (!options.sortType) {
            return creditsList;
        }
        return this[`${options.sortType}Sort`](creditsList);
    }

    orderSort(creditsList) {
        return logicUtils.sort(creditsList, ['order']);
    }
}

export default new CreditService();