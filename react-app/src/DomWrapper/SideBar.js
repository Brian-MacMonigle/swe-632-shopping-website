import React from 'react';
import Styled from 'styled-components';

import Button from '../Button';
import Table from '../Table';
import { prettyCost } from '../FoodItem';

// Code that puts the SideBar on the left side is in DomWrapper

const SideBarWrapper = Styled.div`
	height: 100%;

	border-right: 1px solid black;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	* {
		flex: 0 0 auto;
	}
`;


const TableWrapper = Styled.div`
	flex-grow: 1;
	overflow-y: auto;

	flex-shrink: 1;
`;

const BuyButtonWrapper = Styled.div`
	border-top: 1px solid black;
`;

class SideBar extends React.Component {

	parseFood = (food) => {
		return food.map(({name, cost}) => ([
			name,
			prettyCost(cost),
		]));
	}

	getTotal = (food) => {
		return food.reduce((acc, foodItem) => acc + foodItem.cost, 0);
	}

	render() {
		const { props: { shoppingCart: { food = [] } = {}, clearShoppingCart, removeItemFromShoppingCart }} = this;

		const headers =["Item", "Cost"];
		const footers = ["Total: ", prettyCost(this.getTotal(food))];

		const removeItem = {
			header: "Remove Item",
			value: "Remove Item",
			func: removeItemFromShoppingCart
		}

		const clearButton = {
			header: "Remove Item",
			value: "Clear Cart",
			func: clearShoppingCart,
		}

		return (
			<SideBarWrapper>
				<TableWrapper>
					<Table 
						title="Shopping Cart" 
						headers={headers}
						footers={footers}
						rows={this.parseFood(food)}
						sortable
						removeItem={removeItem}
						clearButton={clearButton}
						showNutrition={false}
					/>
				</TableWrapper>
				<BuyButtonWrapper>
					<Button value="Buy Cart" />
				</BuyButtonWrapper>
			</SideBarWrapper>
		)
	}
}

export default SideBar;