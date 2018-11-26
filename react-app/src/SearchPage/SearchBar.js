import React from 'react';
import { withRouter } from 'react-router-dom';
import Styled from 'styled-components';

import TextBox from '../TextBox';
import Button from '../Button';

const SearchBoxWrapper = Styled.span`
	display: flex;
	justify-content: center;
`;

const ControlledSearchBar = withRouter((props) => {
	const { history, searchValue = "", onType = () => {}, fontSize, onSearch = () => {} } = props;
	return (
		<SearchBoxWrapper>
			<TextBox 
				value={searchValue}
				onChange={onType}
				onEnter={() => onSearch(history)}
				fontSize={fontSize}
			/>
			<Button					
				onClick={() => onSearch(history)}
				fontSize={fontSize || "0.5em"}
			>
				Search
			</Button>
		</SearchBoxWrapper>
	);
});

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchValue: props.initSearchValue || "",
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
		const { props: { fontSize } } = this;

		return (
			<ControlledSearchBar
				searchValue={this.state.searchValue}
				onType={this.onType}
				onSearch={this.onSearch}
				fontSize={fontSize || "0.5em"}
			/>
		);
	}
}

export default SearchBar;
export { ControlledSearchBar };