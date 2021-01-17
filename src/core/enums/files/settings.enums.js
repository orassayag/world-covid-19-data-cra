import { textUtils } from '../../../utils';

const ColorType = textUtils.createEnum([
	['NIGHT', 'night'],
	['DAY', 'day']
]);

const ComponentMode = textUtils.createEnum([
	['APP', 'app'],
	['ICONS', 'icons'],
	['IMAGES', 'images'],
	['TEST', 'test']
]);

const CountriesActionType = textUtils.createEnum([
	['FINALIZE', 'finalize'],
	['CLEANUP', 'cleanup'],
	['UPDATE', 'update'],
	['INACTIVE', 'inactive'],
	['REFRESH', 'refresh']
]);

const CountrySortType = textUtils.createEnum([
	['CASE', 'case'],
	['CASE_PER_MILLION', 'casePerMillion'],
	['DEATH', 'death'],
	['DEATH_PER_MILLION', 'deathPerMillion'],
	['RECOVER', 'recover'],
	['RECOVER_PER_MILLION', 'recoverPerMillion'],
	['NAME', 'name'],
	['CODE', 'code'],
	['CONTINENT', 'continent'],
	['POPULATION', 'population'],
	['ADD_TIME', 'addTime'],
	['UPDATES_COUNT', 'updatesCount'],
	['LAST_UPDATE_TIME', 'lastUpdateTime']
]);

const CreditSortType = textUtils.createEnum([
	['ORDER', 'order']
]);

const DataMode = textUtils.createEnum([
	['LIVE', 'live'],
	['LOCAL', 'local'],
	['RECOVER', 'recover']
]);

const EnvironmentMode = textUtils.createEnum([
	['DEVELOPMENT', 'development'],
	['PRODUCTION', 'production']
]);

const SortDirection = textUtils.createEnum([
	['ASCENDING', 'ascending'],
	['DESCENDING', 'descending']
]);

const SourceSortType = textUtils.createEnum([
	['ORDER', 'order']
]);

const StatisticsUpdatesSortType = textUtils.createEnum([
	['LAST_UPDATE_TIME', 'lastUpdateTime']
]);

const UpdateCountryType = textUtils.createEnum([
	['DATA', 'data'],
	['POPULATION', 'population']
]);

const ViewType = textUtils.createEnum([
	['VERTICAL', 'vertical'],
	['HORIZONTAL', 'horizontal']
]);

export {
	ColorType, ComponentMode, CountriesActionType, CountrySortType, CreditSortType,
	DataMode, EnvironmentMode, SortDirection, SourceSortType, StatisticsUpdatesSortType,
	UpdateCountryType, ViewType
};