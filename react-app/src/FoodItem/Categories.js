const PROTIEN = 'protien';
const DAIRY = 'dairy';
const CARBS = 'carbs';
const SNACKS = 'snacks';

function prettyCategoryType(type) {
	const convert = {
		[PROTIEN]: 'Meat & Protien',
		[DAIRY]: 'Dairy',
		[CARBS]: 'Pasta & Carbs',
		[SNACKS]: 'Snacks & Soda'
	}
	return convert[type] || `INVALID TYPE '${type}'`; 
}

export { PROTIEN, DAIRY, CARBS, SNACKS, prettyCategoryType };