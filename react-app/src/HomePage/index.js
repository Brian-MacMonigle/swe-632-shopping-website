import React from 'react';
import Styled from 'styled-components';

import LinkWrapper from '../LinkWrapper';

const CategoryWrapper = Styled.div`
	flex: 1 0 0;
	width: 100%;
	height: 100%;
	font-size: 2em;
	padding: 0.25em;
	border: 1px solid black;
`;

const CategoryTextWrapper = Styled.div`
    text-decoration: none;
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
	display: flex;
	width: 75%;
	margin: auto;
	justify-content: center;
	align-items: stretch;
`;

class HomePage extends React.Component {
	render() {
		return (
			<div>
				I am the HopePage
				<CategoryContainer>
					<Category to="/protien">Meat & Protien</Category>
					<Category to="/dairy" >Dairy</Category>
					<Category to="/carbs" >Past & Carbs</Category>
					<Category to="/snaks" >Snacks & Soda</Category>
				</CategoryContainer>
			</div>
			);
	}
}

export default HomePage;