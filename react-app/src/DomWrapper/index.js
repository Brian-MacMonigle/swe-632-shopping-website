import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Styled from 'styled-components';

import Header from './Header';
import SideBar from './SideBar';
import Footer from './Footer';
import PageNotFound from '../PageNotFound';
import LoginPage, { SignUpPage } from '../LoginPage';
import HomePage from '../HomePage';
import CategoryPage from '../CategoryPage';
import SearchPage from '../SearchPage';
import BuyCartPage from '../BuyCartPage';
import {PROTIEN, DAIRY, CARBS, SNACKS} from '../FoodItem';

const DomPageWrapper = Styled.div`
	display: grid;
	grid-template-columns: 300px auto;
	grid-template-rows: 100px auto 100px;
	grid-template-areas: 
		"header header"
		"sideBar page"
		"footer footer";
	justify-content: stretch;
	align-content: stretch;

	overflow-y: hidden;

	height: 100vh;
`;

const HeaderWrapper = Styled.div`
	grid-area: header;
`;

const SideBarWrapper = Styled.div`
	grid-area: sideBar;
	overflow-y: auto;
`;

const PageWrapper = Styled.div`
	grid-area: page;
	overflow-y: auto;
`;

const FooterWrapper = Styled.div`
	grid-area: footer;
`;

class DomWrapper extends React.Component {
	// Global state updating functions

	// Shopping Cart

	shoppingCart = {
		food: [] // full food storage
	}

	clearShoppingCart = () => {
		console.log('Clearing shopping cart');
		this.setState({
			shoppingCart: this.shoppingCart,
		})
	}

	addItemToShoppingCart = (food) => {
		console.log('Adding item to shopping cart');
		this.setState((prevState) => ({
			shoppingCart: {
				...(prevState.shoppingCart),
				food: prevState.shoppingCart.food.concat(food),
			}
		}));
	}

	removeItemFromShoppingCart = (index) => {
		console.log('Removing item from shopping cart');
		this.setState((prevState) => ({
			shoppingCart: {
				...(prevState.shoppingCart),
				food: prevState.shoppingCart.food.slice(0, index).concat(prevState.shoppingCart.food.slice(index + 1)),
			}
		}));
	}

	updateLoginState = (username, loggedIn) => {
		this.setState({
			loginState: {
				username,
				loggedIn,
			}
		})
	}

	// The rest of DomWrapper
	constructor(props) {
		super(props);
		this.state = {}; // to allow easy object deconstruction
	}


	componentDidMount() {
		this.setState({
			shoppingCart: this.shoppingCart,
			loginState: {},
		})
	}

	render() {
		const { 
			state: { 
				shoppingCart,
				loginState,
			} = {},
			clearShoppingCart,
			addItemToShoppingCart,
			removeItemFromShoppingCart,
		} = this;
		return (
			<BrowserRouter>
				<React.Fragment>
					<DomPageWrapper>
						<HeaderWrapper>
							<Header />
						</HeaderWrapper>
						<SideBarWrapper>
							<SideBar 
								shoppingCart={shoppingCart}
								clearShoppingCart={clearShoppingCart}
								removeItemFromShoppingCart={removeItemFromShoppingCart}
							/>
						</SideBarWrapper>
						<PageWrapper>
							<Switch>
								<Route exact path="/" component={HomePage} />
								<Route path="/login" component={LoginPage} />
								<Route path="/signup" component={SignUpPage} />
								<Route path="/search" component={SearchPage} />
								<Route path={`/${PROTIEN}`} render={() => <CategoryPage type={PROTIEN} addItemToShoppingCart={addItemToShoppingCart} />} />
								<Route path={`/${DAIRY}`} render={() => <CategoryPage type={DAIRY} addItemToShoppingCart={addItemToShoppingCart} />} />
								<Route path={`/${CARBS}`} render={() => <CategoryPage type={CARBS} addItemToShoppingCart={addItemToShoppingCart} />} />
								<Route path={`/${SNACKS}`} render={() => <CategoryPage type={SNACKS} addItemToShoppingCart={addItemToShoppingCart} />} />
								<Route path={`/buy`} render={() => 
									<BuyCartPage 
										shoppingCart={shoppingCart} 
										removeItemFromShoppingCart={removeItemFromShoppingCart} 
										clearShoppingCart={clearShoppingCart} 
									/>}
								/>
								<Route path="/" component={PageNotFound} />
							</Switch>
						</PageWrapper>
						<FooterWrapper>
							<Footer />
						</FooterWrapper>
					</DomPageWrapper>
				</React.Fragment>
			</BrowserRouter>
		);
	}
}

export default DomWrapper;