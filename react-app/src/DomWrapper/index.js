import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Styled from 'styled-components';

import Header from '../Header';
import SideBar from '../SideBar';
import Footer from '../Footer';
import PageNotFound from '../PageNotFound';
import HomePage from '../HomePage';
import CategoryPage from '../CategoryPage';
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
	render() {
		return (
			<BrowserRouter>
				<React.Fragment>
					<DomPageWrapper>
						<HeaderWrapper>
							<Header />
						</HeaderWrapper>
						<SideBarWrapper>
							<SideBar />
						</SideBarWrapper>
						<PageWrapper>
							<Switch>
								<Route exact path="/" component={HomePage} />
								<Route path={`/${PROTIEN}`} render={() => <CategoryPage type={PROTIEN} />} />
								<Route path={`/${DAIRY}`} render={() => <CategoryPage type={DAIRY} />} />
								<Route path={`/${CARBS}`} render={() => <CategoryPage type={CARBS} />} />
								<Route path={`/${SNACKS}`} render={() => <CategoryPage type={SNACKS} />} />
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