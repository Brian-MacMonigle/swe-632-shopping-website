import React from 'react';
import Styled from 'styled-components';

const TextBoxWrapper = Styled.span`
	margin: 10px;
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

class TextBox extends React.Component {
	constructor(props) {
		super(props);
		this.onChange = props.onChange || (() => false);
		this.onEnter = props.onEnter || (() => false);

		this.TextBoxStyle = {
			fontSize: "0.5em",
			padding: "0.5em 0.75em",
			borderRadius: "25px",
			borderStyle: "solid",
		}

		if(props.fontSize) {
			this.TextBoxStyle.fontSize = props.fontSize;
		}
	}

	onKeyPress = (event) => {
		const key = event.which || event.keyCode;
		if(key === 13) { // enter key
			this.onEnter();
		}
	}

	render() {
		const { props: { password, value } } = this;
		return (
			<TextBoxWrapper>
				<input
					style={this.TextBoxStyle}
					value={value}
					onChange={this.onChange}
					onKeyPress={this.onKeyPress}
					type={password ? 'password' : 'text'}
				/>
			</TextBoxWrapper>
		);
	}
}

export default TextBox;