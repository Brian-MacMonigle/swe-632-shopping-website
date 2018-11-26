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
	font-weight: bold;
`


class SignUpPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",			
			passwords: {
				0: "",
				1: "",
			},
			showError: false,
			errorMessage: "",
		}
	}

	showError = (state) => {
		if(state.passwords[0] !== state.passwords[1]) {
			return { 
				showError: true,
				errorMessage: "The passwords do not match.  Please ensure that you used the same password in both fields."
			};
		}
		if(state.username.length === 0) {
			return {
				showError: true,
				errorMessage: "Please enter your username"
			};
		}
		return {
			showError: false,
			errorMessage: "",
		}
	}

	onUsernameType = (username) => {
		this.setState(prevState => {
			const psudoState = {...prevState, username};
			const error = this.showError(psudoState);
			return {
				...psudoState,
				...error,
			};
		});
	}

	onType = (pass, index) => {
		this.setState(prevState => {
			const psudoState = {
				...prevState, 
				passwords: {
					...prevState.passwords,
					[index]: pass
				}
			};
			const error = this.showError(psudoState);
			return {
				...psudoState,
				...error,
			}
		});
	}

	login = () => {
		const { state: { username, passwords }, props: { updateLoginState }} = this;
		this.setState(prevState => {
			const error = this.showError(prevState);
			if(error.showError) {
				return {
					...error,
				}
			} else {
				// Good to login
				updateLoginState(username, true);
			}
		});
	}

	render() {
		const { state: { username, passwords = [], showError, errorMessage } = {}, props: { loginState } } = this;
		if(loginState && loginState.loggedIn) {
			return <Redirect to="/" />;
		}
		return (
			<React.Fragment>
				<Title>
					Sign Up
				</Title>
				<InputWrapper>
					<TextWrapper>
						Username: 
					</TextWrapper>
					<TextBox 
						fontSize="0.6em"
						onEnter={this.login}
						value={username}
						onChange={(event) => this.onUsernameType(event.target.value)}
						onEnter={this.login}
					/>
					<TextWrapper>
						Password:
					</TextWrapper>
					<TextBox 
						fontSize="0.6em" 
						value={passwords[0]}
						password 
						onChange={(event) => this.onType(event.target.value, 0)}
						onEnter={this.login} 
					/>
					<TextWrapper>
						Confirm Password:
					</TextWrapper>
					<TextBox 
						fontSize="0.6em"
						value={passwords[1]}
						password 
						onChange={(event) => this.onType(event.target.value, 1)}
						onEnter={this.login} 
					/>
				</InputWrapper>
				<ButtonWrapper>
					<Button value="Sign Up" onClick={this.login} />
				</ButtonWrapper>
				{
					showError && (
						<React.Fragment>
						<ErrorMessage>
							{errorMessage}
						</ErrorMessage>
						</React.Fragment>
					)
				}
				<ErrorMessage>
					Never enter a real password on this sight.  I recomend 'abc' or something similar
				</ErrorMessage>
			</React.Fragment>
		);
	}
}

export default SignUpPage;