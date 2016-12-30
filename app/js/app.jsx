import MainTable from './comp_table.jsx';
import React from 'react';
import ReactDOM from 'react-dom';


//component name must be Uppercamel case
const cols = [
	{key: 'seq', label: 'seq'},
	{key: 'Status', label: 'Status'},
	{key: 'Category', label: 'Category'},
	{key: 'Title', label: 'Title'},
	{key: 'Owner', label: 'Owner'},
	{key: 'Priority', label: 'Priority'}
];
const infos = [
    {seq: "1", Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '1'},
    {seq: "1", Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '1'}
];

ReactDOM.render(
	<MainTable columns = {cols} rows = {infos} />,
	document.getElementById('app')
);
