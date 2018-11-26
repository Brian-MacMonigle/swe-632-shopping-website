import React from 'react';
import Styled from 'styled-components';
import { values } from 'lodash';
import { filter as searchAlg } from 'fuzzy';

import SearchBar from './SearchBar';
import { ALL_FOOD, FoodTable } from '../FoodItem';

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

function searchFood(search) {
	const options = {
		extract: (food) => food.name,
	};

	return searchAlg(search, values(ALL_FOOD), options).map(res => res.original);
}

class SearchPage extends React.Component {
	render() {
		const { props: { location: { search: rawQuery = "" } = {} } = {} } = this;
		// Need to remove the '?' at the beginning of the query
		const queries = getQueries(rawQuery.slice(1, rawQuery.length));
		const { search = "" } = queries;

		console.log('SearchPage: ', this, 'rawQuery: ', rawQuery, '\nqueries: ', queries, '\nsearch: ', search, '\nALL_FOOD', ALL_FOOD);

		const searchResults = searchFood(search);

		return (
			<React.Fragment>
				<SearchBar
					initSearchValue={search}
					fontSize={"2em"}
				/>
				<TableWrapper>
					<FoodTable 
						foodItems={searchResults}
						onAdd={(food) => console.log('Add food: ', food, rawQuery)}
						sortable
					/>
				</TableWrapper>
			</React.Fragment>
		)
	}
}

export default SearchPage;