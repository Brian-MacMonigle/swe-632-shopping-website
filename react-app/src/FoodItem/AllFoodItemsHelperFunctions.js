import React from 'react';

import HoverPopup from '../HoverPopup';

function prettyCost(cost = 0) {
	return `$${cost.toFixed(2)}`;
};

function nutritionPopup(foodItem) {
	const popup = <div>Hello there General Kenobi</div>

	return (
		<HoverPopup popup={popup}>
			Nutrition Info
		</HoverPopup>
	);
};

export { prettyCost, nutritionPopup };