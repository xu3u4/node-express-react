import React from 'react';
import ReactDOM from 'react-dom';
import GenerateHeader from './header.jsx';
import GenerateRow from './rows.jsx';
import '../css/table.scss';

const cols = [
	{ key: 'seq', label: 'seq' },
	{ key: 'Status', label: 'Status' },
	{ key: 'Category', label: 'Category' },
	{ key: 'Title', label: 'Title' },
	{ key: 'Owner', label: 'Owner' },
	{ key: 'Priority', label: 'Priority' }
];
const infos = [
    { seq: 1, Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '1'},
    { seq: 1, Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '1'}
];

class MainTable extends React.Component{

	render(){
		return (
			<table>
				<GenerateHeader columns = {this.props.columns} />
				<GenerateRow columns = {this.props.columns} rows = {this.props.rows}  />
			</table>
		);
	}
}

ReactDOM.render(
	<MainTable columns = {cols} rows = {infos} />,
	document.getElementById('app')
);

