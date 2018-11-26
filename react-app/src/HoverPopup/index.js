import React from 'react';
import Styled from 'styled-components';

const TextWrapper = Styled.span`
	text-decoration: underline;
`;

const PopupWrapper = Styled.span`
	visibility: hidden;
	position: absolute;
	z-index: 1;

	:hover {
		visibility: visible;
	}
`;

class HoverPopup extends React.Component {
	render() {
		const { props: { popup }} = this;
		return (
			<TextWrapper>
				{this.props.children}
				<PopupWrapper>
					{popup}
				</PopupWrapper>
			</TextWrapper>
		)
	}
}

export default HoverPopup;