import { ColorType, CountrySortType, SortDirection, ViewType } from '../../core/enums';

class EnumService {

    constructor() {
        this.viewIconAttributeNames = [Object.values(ViewType), Object.values(ColorType), Object.values(SortDirection)];
        this.countrySortTypeValues = Object.values(CountrySortType);
    }
}

export default new EnumService();