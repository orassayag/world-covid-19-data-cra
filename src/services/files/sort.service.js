import { SortModel } from '../../core/models';
import { CountrySortType, SortDirection } from '../../core/enums';

class SortService {

    constructor() {
        this.sortsList = {
            [CountrySortType.CASE]: new SortModel({
                sortTypeName: CountrySortType.CASE,
                fieldsList: ['sortValue'],
                direction: SortDirection.DESCENDING,
                directionSymbol: '-'
            }),
            [CountrySortType.CASE_PER_MILLION]: new SortModel({
                sortTypeName: CountrySortType.CASE_PER_MILLION,
                fieldsList: ['sortValue'],
                direction: SortDirection.DESCENDING,
                directionSymbol: '-'
            }),
            [CountrySortType.DEATH]: new SortModel({
                sortTypeName: CountrySortType.DEATH,
                fieldsList: ['sortValue'],
                direction: SortDirection.DESCENDING,
                directionSymbol: '-'
            }),
            [CountrySortType.DEATH_PER_MILLION]: new SortModel({
                sortTypeName: CountrySortType.DEATH_PER_MILLION,
                fieldsList: ['sortValue'],
                direction: SortDirection.DESCENDING,
                directionSymbol: '-'
            }),
            [CountrySortType.RECOVER]: new SortModel({
                sortTypeName: CountrySortType.RECOVER,
                fieldsList: ['sortValue'],
                direction: SortDirection.DESCENDING,
                directionSymbol: '-'
            }),
            [CountrySortType.RECOVER_PER_MILLION]: new SortModel({
                sortTypeName: CountrySortType.RECOVER_PER_MILLION,
                fieldsList: ['sortValue'],
                direction: SortDirection.DESCENDING,
                directionSymbol: '-'
            }),
            [CountrySortType.NAME]: new SortModel({
                sortTypeName: CountrySortType.NAME,
                fieldsList: ['sortValue'],
                direction: SortDirection.ASCENDING,
                directionSymbol: ''
            }),
            [CountrySortType.CODE]: new SortModel({
                sortTypeName: CountrySortType.CODE,
                fieldsList: ['sortValue'],
                direction: SortDirection.ASCENDING,
                directionSymbol: ''
            }),
            [CountrySortType.CONTINENT]: new SortModel({
                sortTypeName: CountrySortType.CONTINENT,
                fieldsList: ['sortValue'],
                direction: SortDirection.ASCENDING,
                directionSymbol: ''
            }),
            [CountrySortType.POPULATION]: new SortModel({
                sortTypeName: CountrySortType.POPULATION,
                fieldsList: ['sortValue'],
                direction: SortDirection.DESCENDING,
                directionSymbol: '-'
            }),
            [CountrySortType.ADD_TIME]: new SortModel({
                sortTypeName: CountrySortType.ADD_TIME,
                fieldsList: ['sortValue', 'lowerName'],
                direction: SortDirection.DESCENDING,
                directionSymbol: '-'
            }),
            [CountrySortType.UPDATES_COUNT]: new SortModel({
                sortTypeName: CountrySortType.UPDATES_COUNT,
                fieldsList: ['sortValue', 'lowerName'],
                direction: SortDirection.DESCENDING,
                directionSymbol: '-'
            }),
            [CountrySortType.LAST_UPDATE_TIME]: new SortModel({
                sortTypeName: CountrySortType.LAST_UPDATE_TIME,
                fieldsList: ['sortValue', 'lowerName'],
                direction: SortDirection.DESCENDING,
                directionSymbol: '-'
            })
        };
    }
}

export default new SortService();