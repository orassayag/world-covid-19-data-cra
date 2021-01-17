import { textUtils } from '../../../utils';

const SourceName = textUtils.createEnum([
	['POP1', 'pop1'],
	['POP2', 'pop2'],
	['CAC', 'cac'],
	['CLN', 'cln'],
	['COA', 'coa'],
	['CVA', 'cva'],
	['CVS', 'cvs'],
	['GOO', 'goo'],
	['WIK', 'wik'],
	['WOD', 'wod']
]);

const SourceNumberType = textUtils.createEnum([
	['CASE', 'case'],
	['DEATH', 'death'],
	['RECOVER', 'recover'],
	['UPDATE', 'update'],
	['LAST_UPDATE', 'last_update']
]);

const SourceUpdateType = textUtils.createEnum([
	['ADD', '+'],
	['SUB', '-']
]);

export { SourceName, SourceNumberType, SourceUpdateType };