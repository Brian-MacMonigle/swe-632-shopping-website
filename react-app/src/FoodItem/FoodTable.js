import React from 'react';
import { map } from 'lodash';
import uuid from 'uuid/v4';

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

		const rows = map(foodItems, (food, i) => {
			const { name, cost } = food;
			return [
				name, 
				prettyCost(cost), 
				nutritionPopup(food), 
				(
					<Button key={uuid()} 
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
				sortFunctions={{"Cost": c => Number(c.slice(1))}}
				rows={rows}
			/>
		);
	}
}

export default FoodTable;