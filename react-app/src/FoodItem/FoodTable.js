import React from 'react';
import { map } from 'lodash';

import Table from '../Table';
import Button from '../Button';
import { prettyCost, nutritionPopup } from './AllFoodItemsHelperFunctions';

class FoodTable extends React.Component {
	static defaultProps = {
			headers: ["Name", "Cost", "Nutritional Info", "Add To Cart"],
			nonSortableHeaders: ["Nutritional Info", "Add To Cart"]
	}

	onAdd = (food) => {
		if(this.props.onAdd) {
			this.props.onAdd(food);
		}
	}

	render() {
		const { defaultProps = {}, props: { foodItems = [], ...rest} } = this;

		const rows = map(foodItems, food => {
			const { name, cost } = food;
			return [
				name, 
				prettyCost(cost), 
				nutritionPopup(food), 
				(
					<Button 
						onClick={() => this.onAdd(food)}
					>
						Add To Cart
					</Button>
				)
			];
		})

		return (
			<Table 
				{...defaultProps}
				{...rest}
				rows={rows}
			/>
		);
	}
}

export default FoodTable;