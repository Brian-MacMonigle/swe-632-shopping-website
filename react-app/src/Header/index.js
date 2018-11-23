import React from 'react';
import Styled from 'styled-components';

import LinkWrapper from '../LinkWrapper';
import SearchBar from '../SearchBar';

const HeaderWrapper = Styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	font-size: 3em;
	background: Green;
`;

const ElementWrapper = Styled.span`
	display: inline-block;
	padding: 0.25em;
	color: white;
`;

class Header extends React.Component {
	render() {
		return (
			<HeaderWrapper>
				<ElementWrapper>
					<LinkWrapper to="/">
						Brian's Groceries
					</LinkWrapper>
				</ElementWrapper>
				<ElementWrapper>
					<SearchBar />
				</ElementWrapper>
			</HeaderWrapper>
		);
	}
}

export default Header;