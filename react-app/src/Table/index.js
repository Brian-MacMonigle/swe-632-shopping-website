import React from 'react';
import Styled from 'styled-components';

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
	render() {
		const { headers = [], rows = [[]], footer = [] } = this.props.data || {};

		while(headers.length < footer.length) {
			headers.push("");
		}

		while(footer.length < headers.length) {
			footer.push("");
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
							{footer.map((footer, i) => (
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

export default Table;