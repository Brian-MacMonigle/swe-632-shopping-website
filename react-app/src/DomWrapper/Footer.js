import React from 'react';
import Styled from 'styled-components';

const FooterWrapper = Styled.div`
	width: 100%;
	height: 100%;
	color: white;
	background-color: green;
	text-align: center;

	display: flex;
	flex-direction: column;
	justify-content: center;
`;

class Footer extends React.Component {
	render() {
		return (
			<FooterWrapper>
				<p>
					This website was written by Brian MacMonigle for the final project for SWE 632 at GMU		
				</p>
				<p>
					The website will preform best in Chrome on a Computer (no phones or tablets)
				</p>
			</FooterWrapper>
		);
	}
}

export default Footer;