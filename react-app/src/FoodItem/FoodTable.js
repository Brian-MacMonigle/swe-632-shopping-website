import React from 'react';
import Styled from 'styled-components';
import { map } from 'lodash';
import uuid from 'uuid/v4';

import Table from '../Table';
import Button from '../Button';
import { prettyCost, nutritionPopup } from './AllFoodItemsHelperFunctions';

const AddButtonWrapper = Styled.span`
	max-width: 100px;
`;

class FoodTable extends React.Component {
	static defaultProps = {
			headers: ["Name", "Cost", "Add To Cart"],
			nonSortableHeaders: ["Add To Cart"]
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
				nutritionPopup(food, name), 
				prettyCost(cost), 
				(
					<AddButtonWrapper>
						<Button key={uuid()} 
							onClick={() => this.onAdd(food)}
						>
							Add To Cart
						</Button>
					</AddButtonWrapper>
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