import React from 'react';
import Styled from 'styled-components';

const ButtonWrapper = Styled.span`
	cursor: pointer;
	margin: 10px;
	padding: 0.5em 0.75em;

	border: 1px solid ${props => props.borderColor || 'black'};
	border-radius: 25px;
	color: ${props => props.color || 'black'}
	background-color: ${props => props.backgroundColor || 'springGreen'}
	font-size: ${props => props.fontSize || 'inherit'}
	white-space: nowrap;

	display: flex;
	justify-content: center;
	padding-left: 0.5em;
	padding-right: 0.5em;

	:active {
		background-color: ${props => props.activeBackgroundColor || 'limeGreen'}
	}
`;

const UnstyledWrapper = Styled.span`
	cursor: pointer;
`;

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.onClick = props.onClick || (() => false);
	}

	render() {
		return (
			<ButtonWrapper 
				onClick={this.onClick}
				fontSize={this.props.fontSize}
			>
				{this.props.value || this.props.children}
			</ButtonWrapper>
		);
	}
}

class UnstyledButton extends React.Component {
	constructor(props) {
		super(props);
		this.onClick = props.onClick || (() => false);
	}

	render() {
		return (
			<UnstyledWrapper 
				onClick={this.onClick}
			>
				{this.props.value || this.props.children}
			</UnstyledWrapper>
		);
	}
}

export default Button;
export {UnstyledButton};