import React from 'react';
import ReactDOM from 'react-dom';
import GenerateHeader from './header.jsx';
import GenerateTbody from './tbody.jsx';
import '../css/table.scss';



export default class MainTable extends React.Component{

	render(){
		return (
			<table>
				<GenerateHeader columns = {this.props.columns} />
				<GenerateTbody columns = {this.props.columns} rows = {this.props.rows}  />
			</table>
		);
	}
}



