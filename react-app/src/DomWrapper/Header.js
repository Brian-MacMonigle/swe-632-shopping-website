import React from 'react';
import Styled from 'styled-components';

import LinkWrapper from '../LinkWrapper';
import { PROTIEN, DAIRY, CARBS, SNACKS } from '../FoodItem';
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

const HeaderHomeWrapper = Styled.span`
	margin-right: 0.6em;

	:hover {
		text-decoration: underline;
	}
`;

const HeaderLinkWrapper = Styled.span`
	font-size: 0.7em;
	margin: 0.3em;
	
	:hover {
		text-decoration: underline;
	}
`;

const UsernameWrapper = Styled.span`
	text-align: center;
`

const LoginWrapper = Styled.div`
	font-size: 0.5em;

	display: flex;
	justify-content: center;

	* {
		flex: 1 0 0;
	}
`;

class Header extends React.Component {

	logout = () => {
		const { props: { updateLoginState } = {} } = this;
		if(updateLoginState) {
			updateLoginState("", false);
		}
	}

	render() {
		const { props: { loginState: { username = "", loggedIn } = {} } = {} } = this;
		return (
			<HeaderWrapper>
				<ElementWrapper>
					<HeaderHomeWrapper>
						<LinkWrapper to="/">
							Brian's Groceries
						</LinkWrapper>
					</HeaderHomeWrapper>
					<HeaderLinkWrapper>
						<LinkWrapper to={`/${PROTIEN}`}>
							Meats
						</LinkWrapper>
					</HeaderLinkWrapper>
					<HeaderLinkWrapper>
						<LinkWrapper to={`/${DAIRY}`}>
							Dairy
						</LinkWrapper>
					</HeaderLinkWrapper>
					<HeaderLinkWrapper>
						<LinkWrapper to={`/${CARBS}`}>
							Carbs
						</LinkWrapper>
					</HeaderLinkWrapper>
					<HeaderLinkWrapper>
						<LinkWrapper to={`/${SNACKS}`}>
							Snacks
						</LinkWrapper>
					</HeaderLinkWrapper>
					<HeaderLinkWrapper>
						<LinkWrapper to="/search">
							All
						</LinkWrapper>
					</HeaderLinkWrapper>
				</ElementWrapper>
				<ElementWrapper>
					{loggedIn ? (
						<LoginWrapper>
							<UsernameWrapper>
								{`Welcome ${username}!`}
							</UsernameWrapper>
							<Button value="Logout" onClick={this.logout} />
						</LoginWrapper>
					) : (
						<LoginWrapper>
							<LinkWrapper to="/login" >
								<Button value="Login" />
							</LinkWrapper>
							<LinkWrapper to="/signup" >
								<Button value="Sign Up" />
							</LinkWrapper>
						</LoginWrapper>
					)}
					
				</ElementWrapper>
			</HeaderWrapper>
		);
	}
}

export default Header;