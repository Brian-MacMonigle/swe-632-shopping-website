import React from 'react';
import Styled from 'styled-components';

import { UnstyledButton } from '../Button';

const ComponentWrapper = Styled.div`
	font-size: ${props => props.fontSize || "1em"};
	overflow-y: auto;
`;

const TitleWrapper = Styled.div`
	font-weight: bold;
	text-align: center;
	font-size: 1.5em;
	padding: 0.35em;
`;

const TableWrapper = Styled.table`
	width: 100%;
	height: 100%;
	overlow-y: auto;

	border-collapse: collapse;

	border: 1px solid black;
`;

const Thead = Styled.thead`
`;

const Tbody = Styled.tbody`
`;

const Tfoot = Styled.tfoot`
	font-weight: bold;
	border: 2px solid black;
`;

const TR = Styled.tr`
	border: 1px solid black;
`;

const TH = Styled.th`
	border: 1px solid black;
`;

const TD = Styled.td`
	border: 1px solid black;

	text-align: center;
`;

class Table extends React.Component {

	onOptionsClick = (event) => {
	}

	render() {
		const { headers = [], rows = [[]], footers = [], options } = this.props;

		while(headers.length < footers.length) {
			headers.push("");
		}

		while(footers.length != 0 && footers.length < headers.length) {
			footers.push("");
		}

		if(options) {
			headers.unshift((
				<UnstyledButton 
					onClick={this.onOptionsClick}
				>
					*
				</UnstyledButton>
			));
			if(footers.length > 0) {
				footers.unshift("");
			}
		}

		return (
			<ComponentWrapper fontSize={this.props.fontSize} >
				<TitleWrapper>
					{this.props.title}
				</TitleWrapper>
				<TableWrapper>
					<Thead>
						<TR>
							{headers.map((header, i) => (
								<TH key={`table-header-${i}`}>
									{header}
								</TH>
							))}
						</TR>
					</Thead>
					<Tbody>
						{rows.map((row, i) => (
							<TR key={`table-row-${i}`}>
								{row.map((data, j) => (
									<TD key={`table-row-${i}-${j}`}>
										{data}
									</TD>
								))}
							</TR>
						))}
					</Tbody>
					<Tfoot>
						<TR>
							{footers.map((footer, i) => (
								<TD key={`table-footer-${i}`}>
									{footer}
								</TD>
							))}
						</TR>
					</Tfoot>
				</TableWrapper>
			</ComponentWrapper>
		);
	}
}

class FoodTable extends React.Component {
	render() {
		return <div>Table thing</div>
	}
}

export default Table;
export { FoodTable };