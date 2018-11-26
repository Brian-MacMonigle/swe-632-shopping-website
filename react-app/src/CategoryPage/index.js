import React from 'react';
import Styled from 'styled-components';

import { FoodTable } from '../FoodItem';
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

function getTableData(type) {
	const convert = {
		[PROTIEN]: ALL_PROTIEN,
		[DAIRY]: ALL_DAIRY,
		[CARBS]: ALL_CARBS,
		[SNACKS]: ALL_SNACKS
	}
	// Need to turn the json into an array
	return convert[type] || {};
};

class CategoryPage extends React.Component {
	render() {
		return (
			<React.Fragment>
				<CategoryPageTitle>
					{prettyCategoryType(this.props.type)}
				</CategoryPageTitle>
				<TableWrapper>
					<FoodTable 
						foodItems={getTableData(this.props.type)}
						onAdd={(food) => console.log('Add food: ', food)}
						sortable
					/>
				</TableWrapper>
			</React.Fragment>
		);
	}
}

export default CategoryPage;