import React from 'react';
import { Link } from 'react-router-dom';

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.onClick = props.onClick || (() => false);
	}

	render() {
		return (
			<div onClick={this.onClick} >
				{this.props.value}
			</div>
		);
	}
}

export default Button;