import React from 'react';
import Styled from 'styled-components';

const HeaderWrapper = Styled.div`
	width: 100%;
	height: 100px;
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
					Brian's Groceries
				</ElementWrapper>
			</HeaderWrapper>
		);
	}
}

export default Header;