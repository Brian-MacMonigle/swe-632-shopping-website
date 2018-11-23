import React from 'react';
import Styled from 'styled-components';

const TableWrapper = Styled.table`
	width: 100%;
	height: 100%;
`;

const TableHeaderWrapper = Styled.thead`
`;

const TableBodyWrapper = Styled.tbody`
`;

const TableRowWrapper = Styled.tr`
	border: 1px solid black;
`;

const TableHeaderItemWrapper = Styled.th`
`;

const TableDataWrapper = Styled.td`
`;

class Table extends React.Component {
	render() {
		const { headers = [], rows = [[]] } = this.props.data || {};

		return (
			<TableWrapper>
				<TableHeaderWrapper>
					<TableRowWrapper>
						{headers.map((header, i) => (
							<TableHeaderItemWrapper key={`table-header-${i}`}>
								{header}
							</TableHeaderItemWrapper>
						))}
					</TableRowWrapper>
				</TableHeaderWrapper>
				<TableBodyWrapper>
					{rows.map((row, i) => (
						<TableRowWrapper key={`table-row-${i}`}>
							{row.map((data, j) => (
								<TableDataWrapper key={`table-row-${i}-${j}`}>
									{data}
								</TableDataWrapper>
							))}
						</TableRowWrapper>
					))}
				</TableBodyWrapper>
			</TableWrapper>
		);
	}
}

export default Table;