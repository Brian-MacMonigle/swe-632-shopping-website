import React from 'react';
import { Redirect } from 'react-router-dom';
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
			searched: false,
		}
	}

	onType = (event) => {
		this.setState({searchValue: event.target.value})
	}

	onSearch = () => {
		if(this.state.searchValue.length !== 0) {
			console.log(`You have search for '${this.state.searchValue}'`);
			this.setState({searched: true});
		}
	}

	render() {
		if(this.state.searched) {
			// Though react complains, this is the only way to redirect properly
			this.setState({searched: false});
			return (
				<Redirect 
					to={{
						pathname: "/search",
						search: `?value=${this.state.searchValue}`,
					}}
					push
				/>
			);
		}
		return (
			<SearchBoxWrapper>
				<TextBox 
					value={this.state.searchValue}
					onChange={this.onType}
					onEnter={this.onSearch}
					fontSize={this.props.fontSize}
				/>
				<Button
					value="Search"
					onClick={this.onSearch}
					fontSize={this.props.fontSize || "0.5em"}
				/>
			</SearchBoxWrapper>
		);
	}
}

export default SearchBar;