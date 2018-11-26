import React from 'react';
import Styled from 'styled-components';

import LinkWrapper from '../LinkWrapper';
import Button from '../Button';

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


const LoginButtonWrapper = Styled.div`
	font-size: 0.5em;

	display: flex;
	justify-content: center;

	* {
		flex: 1 0 0;
	}
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
					<LoginButtonWrapper>
						<Button value="Login" />
						<Button value="Sign Up" />
					</LoginButtonWrapper>
				</ElementWrapper>
			</HeaderWrapper>
		);
	}
}

export default Header;