import React from 'react';
import Styled from 'styled-components';

import { FoodTable } from '../Table';
import { prettyCategoryType, PROTIEN, DAIRY, CARBS, SNACKS, ALL_PROTIEN, ALL_DAIRY, ALL_CARBS, ALL_SNACKS } from '../FoodItem';

const CategoryPageTitle = Styled.h1`
	text-align: center;
`;

function getTableData(type) {
	const convert = {
		[PROTIEN]: ALL_PROTIEN,
		[DAIRY]: ALL_DAIRY,
		[CARBS]: ALL_CARBS,
		[SNACKS]: ALL_SNACKS
	}
	return convert[type];
}

class CategoryPage extends React.Component {
	render() {
		return (
			<React.Fragment>
				<CategoryPageTitle>
					{prettyCategoryType(this.props.type)}
				</CategoryPageTitle>
				<FoodTable options foodItems={getTableData(this.props.type)} />
			</React.Fragment>
		);
	}
}

export default CategoryPage;