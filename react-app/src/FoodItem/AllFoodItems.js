const baseFoodItem = {
	name: "<NO NAME>",
	cost: 0,
	nutrition: {
		servingsPerContainer: {
			value: 0,
		},
		servingSize: {
			value: 0,
			units: "-",
			value2: 0,
			units2: "g",
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
			fakeVitamin: {
				name: "Fake Vitamin",
				value: 0,
				units: "mg",
				daily: 0,
			},
			fakeVitamin2: {
				name: "Fake Vitamin2",
				value: 0,
				units: "mcg",
				daily: 0,
			}
		},
		ingredients: ["-", "-"]
	}
}

const beef = {
	...baseFoodItem,
	name: "Beef",
	cost: 10,
	nutrition: {
		...baseFoodItem.nutrition,
		servingSize: {
			...baseFoodItem.nutrition.servingSize,
			value: 8,
			units: "oz",
		},
		calories: 200
	}
}

const pork = {
	...baseFoodItem,
	name: "Pork",
	cost: 7,
	nutrition: {
		...baseFoodItem.nutrition,
		servingSize: {
			...baseFoodItem.nutrition.servingSize,
			value: 6,
			units: "oz",
		},
		calories: 140
	}
}

const chicken = {
	...baseFoodItem,
	name: "Chicken",
	cost: 5,
	nutrition: {
		...baseFoodItem.nutrition,
		servingSize: {
			...baseFoodItem.nutrition.servingSize,
			value: 6,
			units: "oz",
		},
		calories: 70
	}
}

const bacon = {
	...baseFoodItem,
	name: "Bacon",
	cost: 20,
	nutrition: {
		...baseFoodItem.nutrition,
		servingSize: {
			...baseFoodItem.nutrition.servingSize,
			value: 30,
			units: "oz",
		},
		calories: 2000
	}
}

const ham = {
	...baseFoodItem,
	name: "Ham",
	cost: 8,
	nutrition: {
		...baseFoodItem.nutrition,
		servingSize: {
			...baseFoodItem.nutrition.servingSize,
			value: 5,
			units: "oz",
		},
		calories: 50
	}
}

const slicedHam = {
	...baseFoodItem,
	name: "Sliced Ham",
	cost: 10,
	nutrition: {
		...baseFoodItem.nutrition,
		servingSize: {
			...baseFoodItem.nutrition.servingSize,
			value: 3,
			units: "oz",
		},
		calories: 30
	}
}

const duck = {
	...baseFoodItem,
	name: "Ham",
	cost: 12,
	nutrition: {
		...baseFoodItem.nutrition,
		servingSize: {
			...baseFoodItem.nutrition.servingSize,
			value: 8,
			units: "oz",
		},
		calories: 70
	}
}

const ALL_PROTIEN = {
	beef,
	pork,
	chicken,
	bacon,
	ham,
	slicedHam,
	duck,
	turkey: {
		...baseFoodItem,
		name: "Turkey",
		cost: 10,
		nutrition: {
			...baseFoodItem.nutrition,
			servingSize: {
				...baseFoodItem.nutrition.servingSize,
				value: 3,
				units: "oz",
			},
			calories: 30
		}
	},
	sausage: {
		...baseFoodItem,
		name: "Sausage",
		cost: 10,
		nutrition: {
			...baseFoodItem.nutrition,
			servingSize: {
				...baseFoodItem.nutrition.servingSize,
				value: 3,
				units: "oz",
			},
			calories: 30
		}
	},
	lamb: {
		...baseFoodItem,
		name: "Lamb",
		cost: 10,
		nutrition: {
			...baseFoodItem.nutrition,
			servingSize: {
				...baseFoodItem.nutrition.servingSize,
				value: 3,
				units: "oz",
			},
			calories: 30
		}
	},
	hotDog: {
		...baseFoodItem,
		name: "Hot Dog",
		cost: 0.5,
		nutrition: {
			...baseFoodItem.nutrition,
			servingSize: {
				...baseFoodItem.nutrition.servingSize,
				value: 3,
				units: "oz",
			},
			calories: 30
		}
	},
	veal: {
		...baseFoodItem,
		name: "Veal",
		cost: 13.3,
		nutrition: {
			...baseFoodItem.nutrition,
			servingSize: {
				...baseFoodItem.nutrition.servingSize,
				value: 3,
				units: "oz",
			},
			calories: 30
		}
	},
};

const wholeMilk = {
	...baseFoodItem,
	name: "Whole Milk",
	cost: 3,
	nutrition: {
		...baseFoodItem.nutrition,
		servingSize: {
			...baseFoodItem.nutrition.servingSize,
			value: 8,
			units: "oz",
		},
		calories: 100
	}
}

const skimMilk = {
	...baseFoodItem,
	name: "Skim Milk",
	cost: 3,
	nutrition: {
		...baseFoodItem.nutrition,
		servingSize: {
			...baseFoodItem.nutrition.servingSize,
			value: 8,
			units: "oz",
		},
		calories: 50
	}
}

const twoPercentMilk = {
	...baseFoodItem,
	name: "2% Milk",
	cost: 3,
	nutrition: {
		...baseFoodItem.nutrition,
		servingSize: {
			...baseFoodItem.nutrition.servingSize,
			value: 8,
			units: "oz",
		},
		calories: 75
	}
}

const ALL_DAIRY = {
	wholeMilk,
	skimMilk,
	twoPercentMilk,
}

const ALL_CARBS = {
	lasagne: {
		...baseFoodItem,
		name: "Lasagne",
		cost: 1,
		nutrition: {
			...baseFoodItem.nutrition,
			servingSize: {
				...baseFoodItem.nutrition.servingSize,
				value: 8,
				units: "sheets",
			},
			calories: 200
		}
	},
	spaghetti: {
		...baseFoodItem,
		name: "Spaghetti",
		cost: 1,
		nutrition: {
			...baseFoodItem.nutrition,
			servingSize: {
				...baseFoodItem.nutrition.servingSize,
				value: 1,
				units: "cup",
			},
			calories: 130
		}
	},
	macaroni: {
		...baseFoodItem,
		name: "Macaroni",
		cost: 1,
		nutrition: {
			...baseFoodItem.nutrition,
			servingSize: {
				...baseFoodItem.nutrition.servingSize,
				value: 3,
				units: "cups",
			},
			calories: 150
		}
	},
	tagliatelle: {
		...baseFoodItem,
		name: "Tagliatelle",
		cost: 1,
		nutrition: {
			...baseFoodItem.nutrition,
			servingSize: {
				...baseFoodItem.nutrition.servingSize,
				value: 2.5,
				units: "cups",
			},
			calories: 170
		}
	},
}

const ALL_SNACKS = {
	whiteCholate: {
		...baseFoodItem,
		name: "White Chocolate",
		cost: 1,
		nutrition: {
			...baseFoodItem.nutrition,
			servingSize: {
				...baseFoodItem.nutrition.servingSize,
				value: 1,
				units: "bar",
			},
			calories: 200
		}
	},
	milkChocolate: {
		...baseFoodItem,
		name: "Milk Chocolate",
		cost: 1,
		nutrition: {
			...baseFoodItem.nutrition,
			servingSize: {
				...baseFoodItem.nutrition.servingSize,
				value: 1,
				units: "bar",
			},
			calories: 225
		}
	},
	healthySnack: {
		...baseFoodItem,
		name: "\"Health Food\"",
		cost: 5,
		nutrition: {
			...baseFoodItem.nutrition,
			servingSize: {
				...baseFoodItem.nutrition.servingSize,
				value: 1,
				units: "food",
			},
			calories: 0
		}

	}
}

const ALL_FOOD = {
	...ALL_PROTIEN,
	...ALL_DAIRY,
	...ALL_CARBS,
	...ALL_SNACKS
}

export { ALL_FOOD, ALL_PROTIEN, ALL_DAIRY, ALL_CARBS, ALL_SNACKS };