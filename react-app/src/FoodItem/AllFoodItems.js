const baseFoodItem = {
	name: "<NO NAME>",
	cost: 0,
	nutrition: {
		servingSize: {
			value: 0,
			units: "NONE"
		},
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
				// 	value: 0,
				// 	units: "mg"
				// 	daily: 0,
			// }
		},
		ingredients: "NONE" || ["NONE1", "NONE2"]
	}
}


const ALL_PROTIEN = {

};

const wholeMilk = {
	...baseFoodItem,
	name: "Whole Milk",
	cost: 3,
	nutrition: {
		...baseFoodItem.nutrition,
		servingSize: "8oz",
		calories: 100
	}
}

const skimMilk = {
	...baseFoodItem,
	name: "Skim Milk",
	cost: 3,
	nutrition: {
		...baseFoodItem.nutrition,
		servingSize: "8oz",
		calories: 50
	}
}

const twoPercentMilk = {
	...baseFoodItem,
	name: "2% Milk",
	cost: 3,
	nutrition: {
		...baseFoodItem.nutrition,
		servingSize: "8oz",
		calories: 75
	}
}

const ALL_DAIRY = {
	wholeMilk,
	skimMilk,
	twoPercentMilk,
}

const ALL_CARBS = {

}

const ALL_SNACKS = {

}

const ALL_FOOD = {
	...ALL_PROTIEN,
	...ALL_DAIRY,
	...ALL_CARBS,
	...ALL_SNACKS
}

export { ALL_FOOD, ALL_PROTIEN, ALL_DAIRY, ALL_CARBS, ALL_SNACKS };