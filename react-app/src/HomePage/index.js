import React from 'react';
import Styled from 'styled-components';

import {PROTIEN, DAIRY, CARBS, SNACKS, prettyCategoryType} from '../FoodItem';
import LinkWrapper from '../LinkWrapper';
import { SearchBar } from '../SearchPage';

const HomePageWrapper = Styled.div`
`;

const CategoryWrapper = Styled.div`
	flex: 1 0 0;
	font-size: 2em;
	padding: 0.5em;
	border: 1px solid black;
`;

const CategoryTextWrapper = Styled.div`
	color: blue;
	text-align: center;
`;

const CenterTextWrapper = Styled.div`
	text-align: center;
`;

class Category extends React.Component {
	render() {
		return (
			<CategoryWrapper>
				<LinkWrapper to={`/${this.props.category}`}>
					<CategoryTextWrapper>
						{prettyCategoryType(this.props.category)}
					</CategoryTextWrapper>
				</LinkWrapper>
			</CategoryWrapper>
		);
	}
}

const CategoryContainer = Styled.div`
	width: 75%;
	padding: 1em 2em;
	margin: 1em auto;


	display: flex;
	justify-content: center;
	align-items: stretch;
`;


const CategoryContainerTitle = Styled.h1`
	text-align: center;
`;


class HomePage extends React.Component {
	render() {
		return (
			<HomePageWrapper>
				<CategoryContainerTitle>
					Browse by Category
				</CategoryContainerTitle>
				<CategoryContainer>
					<Category category={PROTIEN} />
					<Category category={DAIRY} />
					<Category category={CARBS} />
					<Category category={SNACKS} />
				</CategoryContainer>
				<CenterTextWrapper>
					<h1>Search the Store</h1>
				</CenterTextWrapper>
				<SearchBar fontSize={"2em"}/>
			</HomePageWrapper>
			);
	}
}

export default HomePage;