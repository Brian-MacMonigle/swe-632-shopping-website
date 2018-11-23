import React from 'react';
import Styled from 'styled-components';

import LinkWrapper from '../LinkWrapper';
import SearchBar from '../SearchBar';

const HomePageWrapper = Styled.div`
`

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
				<LinkWrapper to={this.props.to}>
					<CategoryTextWrapper>
						{this.props.children}
					</CategoryTextWrapper>
				</LinkWrapper>
			</CategoryWrapper>
		);
	}
}

const CategoryContainer = Styled.div`
	width: 75%;
	padding: 3em;
	margin: auto;


	display: flex;
	justify-content: center;
	align-items: stretch;
`;

class HomePage extends React.Component {
	render() {
		return (
			<HomePageWrapper>
				<CategoryContainer>
					<Category to="/protien">Meat & Protien</Category>
					<Category to="/dairy" >Dairy</Category>
					<Category to="/carbs" >Pasta & Carbs</Category>
					<Category to="/snaks" >Snacks & Soda</Category>
				</CategoryContainer>
				<CenterTextWrapper>
					<h1>Search the store</h1>
				</CenterTextWrapper>
				<SearchBar fontSize={"2em"}/>
			</HomePageWrapper>
			);
	}
}

export default HomePage;