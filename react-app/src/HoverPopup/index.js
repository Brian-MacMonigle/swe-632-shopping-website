import React from 'react';
import Styled from 'styled-components';

const TextWrapper = Styled.span`
	text-decoration: underline;

	:hover {
		* {
			visibility: visible;
		}
	}
`;

const PopupWrapper = Styled.div`
	visibility: hidden;
	position: absolute;
	z-index: 1;
	x: ${props => props.x || 0}px;
	y: ${props => props.y || 0}px;
`;

class HoverPopup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			x: 0,
			y: 0,
		}
	}

	onMouseMove = (event) => {
		const {clientX, clientY} = event;
		this.setState({
			x: clientX,
			y: clientY,
		})
	}

	render() {
		const { props: { popup, xOffset = 0, yOffset = 0 } = {}, state: { x, y } = {} } = this;
		return (
			<TextWrapper onMouseMove={this.onMouseMove} >
				{this.props.children}
				<PopupWrapper x={x + xOffset} y={y + yOffset}>
					{popup}
				</PopupWrapper>
			</TextWrapper>
		)
	}
}

export default HoverPopup;