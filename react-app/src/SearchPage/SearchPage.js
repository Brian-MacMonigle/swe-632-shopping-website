import React from 'react';
import Styled from 'styled-components';
import { values } from 'lodash';
import { filter as searchAlg } from 'fuzzy';

import { ControlledSearchBar } from './SearchBar';
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
	constructor(props) {
		super(props);
		this.state = {
			searchValue: null
		}
	}

	onType = (event) => {
		this.setState({searchValue: event.target.value})
	}

	onSearch = (history) => {
		const { state: { searchValue = "" }} = this;
		if(history && searchValue.length > 0) {
			history.push(`/search/?search=${searchValue}`)
		}
	}

	render() {
		const { state: { searchValue } = {}, props: { location: { search: rawQuery = "" } = {} } = {} } = this;

		// Get the urlSearch
		// Need to remove the '?' at the beginning of the query
		const queries = getQueries(rawQuery.slice(1, rawQuery.length));
		const { search: urlSearch = "" } = queries;

		// If searchValue not set yet, use url.  Otherwise use interal serachValue
		const search = searchValue === null ? urlSearch : searchValue;

		const searchResults = searchFood(search);

		return (
			<React.Fragment>
				<ControlledSearchBar
					searchValue={search}
					onType={this.onType}
					onSearch={this.onSearch}
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