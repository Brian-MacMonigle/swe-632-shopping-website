import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../Header';
import PageNotFound from '../PageNotFound';
import HomePage from '../HomePage';

class DomWrapper extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<React.Fragment>
					<Header />
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/" component={PageNotFound} />
					</Switch>
				</React.Fragment>
			</BrowserRouter>
		);
	}
}

export default DomWrapper;