import React from 'react';
import Styled from 'styled-components';
import { sortBy, reduceRight, reverse } from 'lodash';
import uuid from 'uuid/v4';

import Button, { UnstyledButton } from '../Button';

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
	background-color: Gainsboro;
`;

const SortableHeader = Styled.span`
	color: blue;
`;

const Tbody = Styled.tbody`
`;

const Tfoot = Styled.tfoot`
	font-weight: bold;
	border: 2px solid black;
`;

const TR = Styled.tr`
	border: 1px solid black;

	:hover {
		background-color: #EFEFEF;
	}
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
// 	ex: { header: "Name", direction: DECENDING, ?func: (initialRowValue) => toSortByValue }.
function compoundSort(headers, rows, ...sorting) {
	return reduceRight(
		sorting, 
		(acc, headerAndDirection) => {
			if(!isModifyingSortState(headerAndDirection.direction)) {
				return acc;
			}
			const sortFunc = headerAndDirection.func || (v => v);
			const sorted = sortBy(
				acc, 
				(row) => 
					sortFunc(row[headers.indexOf(headerAndDirection.header)]),
				[],
			);

			const res = headerAndDirection.direction === DECENDING ? reverse(sorted) : sorted;
			console.log('compoundSort: ', sorted);
			return res;
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
		this.setState((prevState, props) => {
			const { sort } = prevState;
			const { sortFunctions = {} } = props;

			console.log(sortFunctions);

			// remove old
			const toRemove = sort.findIndex(({header: head}) => head === header);
			let oldSort = {};
			if(toRemove >= 0) {
				oldSort = sort.splice(toRemove, 1)[0];
			}

			const sortFunc = sortFunctions[header] || (v => v);

			// add new
			sort.unshift({ 
				header,
				direction: nextSortState(oldSort.direction),
				func: sortFunc,
			});
			return { sort };
		});
	}

	render() {
		let { 
			props: { 
				headers = [], 
				rows = [[]], 
				footers = [], 
				sortable, 
				nonSortableHeaders = [],
				clearButton,
				removeItem,
			} = {}, 
			state: { 
				sort = []
			} = {} 
		} = this;

		if(clearButton) {
			const { header: clearHead, value: clearValue, func: clearFunc, ...rest } = clearButton;
			headers = headers.concat(clearHead);
			nonSortableHeaders = nonSortableHeaders.concat(clearHead);
			footers = footers.concat(<Button value={clearValue} onClick={clearFunc} {...rest} />);
		}

		if(removeItem) {
			if(!headers.find(head => head === removeItem.header)) {
				headers = headers.concat(removeItem.header);
				nonSortableHeaders = nonSortableHeaders.concat(clearButton.header);
			}
			// add button to all rows.  We assume that the clear button is the last element for simplicity
			rows = rows.map((row, i) => row.concat(<Button value={removeItem.value} onClick={() => removeItem.func(i)} />));
		}

		// Sort
		const sortedRows = compoundSort(headers, rows, ...this.state.sort);

		// Rendering
		const htmlHeaders = (
			<TR>
				{headers.map((header, i) => 
					// add button for sorting
					sortable && !nonSortableHeaders.find(head => head === header) ? (
						<TH key={uuid()}>
							<UnstyledButton onClick={() => this.sort(header)} >
								<SortableHeader>
									{`${header} ${prettySortState((sort.find(({header: head}) => head === header) || {}).direction)}`}
								</SortableHeader>
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
					<TD key={uuid()}>
						{footer}
					</TD>
				))}
			</TR>
		);

		const htmlRows = sortedRows.map((row, i) => (
			<TR key={uuid()}>
				{row.map((data, j) => (
					<TD key={uuid()}>
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