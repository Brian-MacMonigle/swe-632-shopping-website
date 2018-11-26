import React from 'react';

import HoverPopup from '../HoverPopup';

function prettyCost(foodItem) {
	const { cost = 0 } = foodItem;
	return `$${cost.toFixed(2)}`;
};

function nutritionPopup(foodItem) {
	return (
		<HoverPopup>
			Nutrition Info
		</HoverPopup>
	);
};

export { prettyCost, nutritionPopup };