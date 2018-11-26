import React from 'react';
import Styled from 'styled-components';

import { FoodTable } from '../FoodItem';
import { ControlledSearchBar, searchFood } from '../SearchPage';
import { prettyCategoryType, PROTIEN, DAIRY, CARBS, SNACKS, ALL_PROTIEN, ALL_DAIRY, ALL_CARBS, ALL_SNACKS } from '../FoodItem';

const CategoryPageTitle = Styled.h1`
	text-align: center;
`;

const TableWrapper = Styled.div`
	padding: 1em;
	padding-top: 0;
	margin: 2em;
	margin-top: 0;
`;

class CategoryPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchValue: ""
		}
	}

	getTableData = () => {
		const { 
			props: {
				type
			} = {}, 
			state: {
				searchValue
			}, 
		} = this;

		const convert = {
			[PROTIEN]: ALL_PROTIEN,
			[DAIRY]: ALL_DAIRY,
			[CARBS]: ALL_CARBS,
			[SNACKS]: ALL_SNACKS
		}
		// Need to turn the json into an array
		const food = convert[type] || {};
		return searchFood(food, searchValue);
	};

	onType = (event) => {
		this.setState({searchValue: event.target.value})
	}

	onSearch = (history) => {
		const { state: { searchValue = "" }} = this;
		if(history && searchValue.length > 0) {
			history.push(`/search/?search=${searchValue}`)
		}
	}

	render() {
		const { 
			props: 
			{ 
				addItemToShoppingCart = () => {} 
			} = {},
			state: {
				searchValue,
			},
		} = this;

		return (
			<React.Fragment>
				<CategoryPageTitle>
					{prettyCategoryType(this.props.type)}
				</CategoryPageTitle>
				<ControlledSearchBar 
					fontSize="1.5em"
					searchValue={searchValue}
					onType={this.onType}
					onSearch={this.onSearch}
					searchButtonValue="Search All"
					searchOnEnter={false}
				/>
				<TableWrapper>
					<FoodTable 
						foodItems={this.getTableData()}
						onAdd={(food) => addItemToShoppingCart(food)}
						sortable
					/>
				</TableWrapper>
			</React.Fragment>
		);
	}
}

export default CategoryPage;