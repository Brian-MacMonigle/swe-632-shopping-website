import React from 'react';
import Styled from 'styled-components';

import Table from '../Table';
import { prettyCost, nutritionPopup } from '../FoodItem';
import Button from '../Button';

const Title = Styled.h1`
	text-align: center;
`;

const TableWrapper = Styled.div`
	margin: 3em;
`;

const ButtonWrapper = Styled.div`
	font-size: 2em;
	padding: 1em;
	margin: 1em 4em;
	margin-bottom: 0;
`;

const TextWrapper = Styled.p`
	padding: 2em;
	padding-top: 0;
	margin: 0 2em;
`;

class BuyCartPage extends React.Component {

	getTotal = () => {
		const { props: { shoppingCart: { food = [] } = {} } = {} } = this;
		return prettyCost(food.reduce((acc, item) => acc + item.cost, 0));
	}

	parseFood = () => {
		const { props: { shoppingCart: { food = [] } = {} } = {} } = this;
		return food.map((foodItem) => ([
			nutritionPopup(foodItem, foodItem.name),
			prettyCost(foodItem.cost),
		]));
	}

	render() {
		const { props: { removeItemFromShoppingCart, clearShoppingCart, shoppingCart: { food = [] } = {} } = {} } = this;

		const headers = ["Item", "Cost"];
		const footers = ["Total", this.getTotal()];

		const removeItem = {
			header: "Remove Item",
			value: "Remove Item",
			func: removeItemFromShoppingCart
		}

		const clearButton = {
			header: "Remove Item",
			value: "Clear Cart",
			func: clearShoppingCart,
			disabled: food.length === 0,
		}


		return (
			<React.Fragment>
				<Title>
					Shopping Cart
				</Title>
				<TableWrapper>
					<Table
						title="Shopping Cart" 
						headers={headers}
						footers={footers}
						rows={this.parseFood()}
						sortable
						removeItem={removeItem}
						clearButton={clearButton}
						sortFunctions={{"Cost": v => Number(v.slice(1)) }}
					/>
				</TableWrapper>
				<ButtonWrapper>
					<Button
						value="Proceed to Checkout"
						disabled
					/>
				</ButtonWrapper>
				<TextWrapper>
					* Note that the proceed to checkout button will never work because this is not a real website.  This button would take you to a third party buy page (like paypal).
				</TextWrapper>
			</React.Fragment>
		);
	}
}

export default BuyCartPage;