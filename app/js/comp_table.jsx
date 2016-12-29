import React from 'react';
import ReactDOM from 'react-dom';
import GenerateHeader from './header.jsx';
import GenerateRow from './rows.jsx';
import '../css/table.scss';



export default class MainTable extends React.Component{

	render(){
		return (
			<table>
				<GenerateHeader columns = {this.props.columns} />
				<GenerateRow columns = {this.props.columns} rows = {this.props.rows}  />
			</table>
		);
	}
}



