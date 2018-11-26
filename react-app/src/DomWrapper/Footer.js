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

const P = Styled.p`
	margin: 0.25em;
`

class Footer extends React.Component {
	render() {
		return (
			<FooterWrapper>
				<P>
					This website was written by Brian MacMonigle for the final project for SWE 632 at GMU	
				</P>
				<P>
					The website will perform best in Chrome on a Computer (no phones or tablets)
				</P>
				<P>
					* Most numbers are made up and should not be used as diatery advice
				</P>
			</FooterWrapper>
		);
	}
}

export default Footer;