import React from 'react';
import Styled from 'styled-components';
import { sortBy, reduceRight, reverse } from 'lodash';

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

const ASCENDING = 1;
const DECENDING = -1;
const NONE = 0;

function isModifyingSortState(sortState) {
	const convert = {
		[ASCENDING]: 1,
		[DECENDING]: 1
	}
	return convert[sortState] || 0;
}

function nextSortState(currentSortState) {
	// default case
	if(currentSortState === undefined) {
		return ASCENDING;
	}
	const convert = {
		[ASCENDING]: DECENDING,
		[DECENDING]: NONE,
		[NONE]: ASCENDING
	};
	return convert[currentSortState];
}

function prettySortState(sortState) {
	const convert = {
		[ASCENDING]: '↑',
		[DECENDING]: '↓'
	};
	return convert[sortState] || '-';
}

// Sorts in reverse order of sorting argument.  Aka, first one entered is the primary sort.
// headers: same as props ([values])
// hows: same as props ([[values]])
// (each) sorting: { header: "in headers" direction: ASCENDING || DECENDING }
// 	ex: { header: "Name", direction: DECENDING }.
function compoundSort(headers, rows, ...sorting) {
	return reduceRight(
		sorting, 
		(acc, headerAndDirection) => {
			if(!isModifyingSortState(headerAndDirection.direction)) {
				return acc;
			}
			const sorted = sortBy(
				acc, 
				(row) => 
					row[headers.indexOf(headerAndDirection.header)],
				[],
			);
			return headerAndDirection.direction === DECENDING ? reverse(sorted) : sorted;
		},
		rows
	);
}

class Table extends React.Component {
	constructor(props) {
		super(props);
		this.state = {sort: []};
	}

	sort = (header) => {
		this.setState((prevState) => {
			const { sort } = prevState;

			// remove old
			const toRemove = sort.findIndex(({header: head}) => head === header);
			let oldSort = {};
			if(toRemove >= 0) {
				oldSort = sort.splice(toRemove, 1)[0];
			}

			// add new
			sort.unshift({ header, direction: nextSortState(oldSort.direction)});
			return { sort };
		});
	}

	render() {
		const { props: { headers = [], rows = [[]], footers = [], sortable, nonSortableHeaders = [] } = {}, state: { sort = [] } = {} } = this;

		// Headers and footers are same lenght (looks weird if not)
		while(headers.length < footers.length) {
			headers.push("");
		}

		while(footers.length !== 0 && footers.length < headers.length) {
			footers.push("");
		}

		// Sort
		const sortedRows = compoundSort(headers, rows, ...this.state.sort);

		// Rendering
		const htmlHeaders = (
			<TR>
				{headers.map((header, i) => 
					// add button for sorting
					sortable && !nonSortableHeaders.find(head => head === header) ? (
						<TH key={`table-header-${i}`}>
							<UnstyledButton onClick={() => this.sort(header)} >
								{`${header} ${prettySortState((sort.find(({header: head}) => head === header) || {}).direction)}`}
							</UnstyledButton>
						</TH>
					) : (
						<TH key={`table-header-${i}`}>
							{header}
						</TH>
					)
				)}
			</TR>
		);

		const htmlFooters = (
			<TR>
				{footers.map((footer, i) => (
					<TD key={`table-footer-${i}`}>
						{footer}
					</TD>
				))}
			</TR>
		);

		const htmlRows = sortedRows.map((row, i) => (
			<TR key={`table-row-${i}`}>
				{row.map((data, j) => (
					<TD key={`table-row-${i}-${j}`}>
						{data}
					</TD>
				))}
			</TR>
		));

		return (
			<ComponentWrapper fontSize={this.props.fontSize} >
				<TitleWrapper>
					{this.props.title}
				</TitleWrapper>
				<TableWrapper>
					{headers.length > 0 && (
						<Thead>
							{htmlHeaders}
						</Thead>
					)}
					{rows.length > 0 && rows[0].length > 0 && (
						<Tbody>
							{htmlRows}
						</Tbody>
					)}
					{footers.length > 0 && (
						<Tfoot>
							{htmlFooters}
						</Tfoot>
					)}
				</TableWrapper>
			</ComponentWrapper>
		);
	}
}

export default Table;