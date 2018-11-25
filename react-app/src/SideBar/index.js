import React from 'react';
import Styled from 'styled-components';

import Button from '../Button';
import Table from '../Table';

// Code that puts the SideBar on the left side is in DomWrapper

const SideBarWrapper = Styled.div`
	height: 100%;

	border-right: 1px solid black;

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
	overflow-y: auto;
`;

const BuyButtonWrapper = Styled.div`
	border-top: 1px solid black;
`;

class SideBar extends React.Component {
	headers = ["Item", "Item Cost", "Remove Item"];

	footers = ["Total: ", "$3", <Button value="Clear Cart" />];

	rows = [
		["Milk", "$2", <Button value="Remove" />],
		["Eggs", "$1", <Button value="Remove" />],
		["Milk", "$2", <Button value="Remove" />],
		["Eggs", "$1", <Button value="Remove" />]
	];

	render() {
		return (
			<SideBarWrapper>
				<LoginButtonWrapper>
					<Button value="Login" />
					<Button value="Sign Up" />
				</LoginButtonWrapper>
				<TableWrapper>
					<Table title="Shopping Cart" headers={this.headers} footers={this.footers} rows={this.rows} />
				</TableWrapper>
				<BuyButtonWrapper>
					<Button value="Buy Cart" />
				</BuyButtonWrapper>
			</SideBarWrapper>
		);
	}
}

export default SideBar;