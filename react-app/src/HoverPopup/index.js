import React from 'react';
import Styled from 'styled-components';

const PopupWrapper = Styled.span`
	text-decoration: underline;
`;

class HoverPopup extends React.Component {
	render() {
		return (
			<PopupWrapper>
				{this.props.children}
			</PopupWrapper>
		)
	}
}

export default HoverPopup;