// Defines food item data structure
// Lists and exports all food items (by category)

// Categories
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


// Food item data structure

const baseFoodItem = {
	name: "<NO NAME>",
	cost: 0,
	nutrition: {
		servingSize: 'NONE',
		calories: 0,
		fat: {
			total: {
				value: 0,
				daily: 0
			},
			saturated: {
				value: 0,
				daily: 0
			},
			trans: {
				value: 0,
				daily: 0
			}
		},
		cholesterol: {
			value: 0,
			daily: 0
		},
		sodium: {
			value: 0,
			daily: 0
		},
		carbohydrate: {
			total: {
				value: 0,
				daily: 0
			},
			fiber: {
				value: 0,
				daily: 0
			},
			sugars: {
				total: {
					value: 0,
					daily: 0
				},
				added: {
					value: 0,
					daily: 0
				}
			}
		},
		protien: {
			value: 0,
			daily: 0
		},
		vitamins: {
			// fakeVitamin: {
				// 	amount: 0,
				// 	units: "mg"
				// 	daily: 0,
			// }
		},
		ingredients: "NONE" || ["NONE1", "NONE2"]
	}
}

// Helper functions for formatting data in the data structure
function prettyCost(foodItem) {
	const { cost = 0 } = foodItem;
	return `${cost.toFixed(2)}`
}

// Lists of items.  Think of this as a database.

const ALL_PROTIEN = {

}

const WholeMilk = {
	...baseFoodItem,
	name: "Whole Milk",
	cost: 3,

}

const ALL_DAIRY = {
	WholeMilk
}

const ALL_CARBS = {

}

const ALL_SNACKS = {

}

export {PROTIEN, DAIRY, CARBS, SNACKS, prettyCategoryType};
export { ALL_PROTIEN, ALL_DAIRY, ALL_CARBS, ALL_SNACKS };