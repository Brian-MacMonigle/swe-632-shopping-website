import React from 'react';
import { Redirect } from 'react-router-dom';
import Styled from 'styled-components';

import TextBox from '../TextBox';
import Button from '../Button';

const Title = Styled.h1`
	font-size: 3em;
	margin-top: 2em;
	text-align: center;
`;

const InputWrapper = Styled.h1`
	margin: auto;
	display: grid;
	grid-template-columns: 200px auto;
	font-weight: normal;
	justify-content: center;
	align-items: stretch;
`;

const TextWrapper = Styled.span`
	margin: auto 0;
	margin-left: auto;
	font-size: 0.75em;
`;

const ButtonWrapper = Styled.div`
	width: 200px;
	margin: auto;
`;

const ErrorMessage = Styled.div`
	color: red;
	text-align: center;
	margin: 0 2em;
	padding: 1em;
`

class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			attemptLogin: false,
		}
	}

	login = () => {
		this.setState({
			attemptLogin: true,
		})
	}

	render() {
		const { state: { attemptLogin } = {}, props: { loginState } } = this;
		if(loginState && loginState.loggedIn) {
			return <Redirect to="/" />;
		}
		return (
			<React.Fragment>
				<Title>
					Log In
				</Title>
				<InputWrapper>
					<TextWrapper>
						Username: 
					</TextWrapper>
					<TextBox fontSize="0.6em" />
					<TextWrapper>
						Password:
					</TextWrapper>
					<TextBox fontSize="0.6em" password />
				</InputWrapper>
				<ButtonWrapper>
					<Button value="Log In" onClick={this.login} />
				</ButtonWrapper>
				{
					attemptLogin && (
						<React.Fragment>
						<ErrorMessage>
							The Username and Password combination does not match our records.  Please try again.
						</ErrorMessage>
						<ErrorMessage>
							* Note: there is no database set up to remember logins because this is a sample website
						</ErrorMessage>
						</React.Fragment>
					)
				}
			</React.Fragment>
		);
	}
}

export default LoginPage;