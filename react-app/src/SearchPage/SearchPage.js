import React from 'react';
import Styled from 'styled-components';

import SearchBar from './SearchBar';
import { ALL_FOOD, FoodTable } from '../FoodItem';

const SearchPageTitle = Styled.h1`
	text-align: center;
`;

const TableWrapper = Styled.div`
	padding: 1em;
	padding-top: 0;
	margin: 2em;
	margin-top: 0;
`;

function getQueries(rawQueries = "") {
	const paramList = rawQueries.split('&');
	let res = {};
	paramList.forEach(rawQuery => {
		const parsed = rawQuery.split('=');
		res = { ...res, [parsed[0]]: decodeURI(parsed[1]) };
	});
	return res;
}

class SearchPage extends React.Component {
	render() {
		const { props: { location: { search: rawQuery = "" } = {} } = {} } = this;
		// Need to remove the '?' at the beginning of the query
		const queries = getQueries(rawQuery.slice(1, rawQuery.length));
		const { search = "" } = queries;

		console.log('SearchPage: ', this, 'rawQuery: ', rawQuery, '\nqueries: ', queries, '\nsearch: ', search);

		return (
			<React.Fragment>
				<SearchBar
					initSearchValue={search}
					fontSize={"2em"}
				/>
				<TableWrapper>
					<FoodTable 
						foodItems={ALL_FOOD}
						onAdd={(food) => console.log('Add food: ', food)}
						sortable
					/>
				</TableWrapper>
			</React.Fragment>
		)
	}
}

export default SearchPage;