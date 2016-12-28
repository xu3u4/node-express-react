import React from 'react';
import ReactDOM from 'react-dom';
import generateHeader from 'header'

require('../css/table.scss');

const cols = [
	{ key: 'seq', label: 'seq' },
	{ key: 'Status', label: 'Status' },
	{ key: 'Category', label: 'Category' },
	{ key: 'Title', label: 'Title' },
	{ key: 'Owner', label: 'Owner' },
	{ key: 'Priority', label: 'Priority' }
];
const infos = [
    { seq: 1, Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '1'}
];

const generateHeader = cols.map(
	(col) => <th key={col.key}>{ col.key }</th>
)

const generateCells = cols.map( (col) =>
	infos.map(
		(info) => <td>{info[col.key]}</td>
	)
)

class MainTable extends React.Component{
	render(){
		return (
			<table>
				<thead><tr>{generateHeader}</tr></thead>
				<tbody><tr>{generateCells}</tr></tbody>
			</table>
		);
	}
}

ReactDOM.render(
	<MainTable />,
	document.getElementById('app')
);
