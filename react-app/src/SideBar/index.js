import React from 'react';
import Styled from 'styled-components';

import Button from '../Button';
import Table from '../Table';

// Code that puts the SideBar on the left side is in DomWrapper

const SideBarWrapper = Styled.div`
	width: 100%;
	height: 100%;

	border-right: 1px solid black;
	border-bottom: 1px solid black;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const LoginButtonWrapper = Styled.div`
	border-bottom: 1px solid black;

	display: flex;
	justify-content: center;

	* {
		flex: 1 0 0;
	}
`

const TableWrapper = Styled.div`
	flex-grow: 1;
`;

const BuyButtonWrapper = Styled.div`
	border-top: 1px solid black;
`;

class SideBar extends React.Component {

	someData = {
		headers: ["Item", "Cost"],
		rows: [
			["Milk", "$2"],
			["Eggs", "$1"]
		]
	}

	render() {
		return (
			<SideBarWrapper>
				<LoginButtonWrapper>
					<Button value="Login" />
					<Button value="Sign Up" />
				</LoginButtonWrapper>
				<TableWrapper>
					<Table data={this.someData} />
				</TableWrapper>
				<BuyButtonWrapper>
					<Button value="Buy" />
				</BuyButtonWrapper>
			</SideBarWrapper>
		);
	}
}

export default SideBar;