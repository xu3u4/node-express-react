import React from 'react';
import ReactDOM from 'react-dom';
import GenerateHeader from './header.jsx';
import GenerateRow from './rows.jsx';

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

class MainTable extends React.Component{

	render(){
		return (
			<table>
				<thead><GenerateHeader columns = {cols} /></thead>
				<tbody><GenerateRow columns = {cols} rows = {infos}  /></tbody>

			</table>
		);
	}
}

ReactDOM.render(
	<MainTable />,
	document.getElementById('app')
);

