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

const UsernameWrapper = Styled.span``

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
		console.log('header: ', this);
		const { props: { loginState: { username = "", loggedIn } = {} } = {} } = this;
		console.log('username: ', username, loggedIn);
		return (
			<HeaderWrapper>
				<ElementWrapper>
					<LinkWrapper to="/">
						Brian's Groceries
					</LinkWrapper>
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