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

// Seems to not be working.  But static works for Nutriton Info, so leaving it.
const PopupWrapper = Styled.div`
	visibility: hidden;
	position: absolute;
	z-index: 1;
	left: ${props => props.x || 0}px;
	top: ${props => props.y || 0}px;
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