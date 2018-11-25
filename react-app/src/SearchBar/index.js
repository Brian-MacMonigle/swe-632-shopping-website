import React from 'react';
import { withRouter } from 'react-router-dom';
import Styled from 'styled-components';

import TextBox from '../TextBox';
import Button from '../Button';

const SearchBoxWrapper = Styled.span`
	display: flex;
	justify-content: center;
`;

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchValue: "",
		}
		this.SearchButton = withRouter(({ history }) => (
			<Button
				onClick={() => this.onSearch(history)}
				fontSize={this.props.fontSize || "0.5em"}
			>
				Search
			</Button>
		));
	}

	onType = (event) => {
		this.setState({searchValue: event.target.value})
	}

	onSearch = (history) => {
		if(this.state.searchValue.length !== 0) {
			console.log(`You have search for '${this.state.searchValue}'`);
			history.push(`/search/?val=${this.state.searchValue}`)
		}
	}

	render() {
		const { SearchButton } = this;
		return (
			<SearchBoxWrapper>
				<TextBox 
					value={this.state.searchValue}
					onChange={this.onType}
					onEnter={this.onSearch}
					fontSize={this.props.fontSize}
				/>
				<SearchButton					
					onClick={this.onSearch}
					fontSize={this.props.fontSize || "0.5em"}
				>
					Search
				</SearchButton>
			</SearchBoxWrapper>
		);
	}
}

export default SearchBar;