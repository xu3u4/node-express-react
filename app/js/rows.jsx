import React from 'react';
//console.log(1123);
export default class GenerateRow extends React.Component{
	render() {
		const geRow = this.props.columns.map( (col) =>
			this.props.rows.map(
				(info) => <td>{info[col.key]}</td>
			)
		)
	    return (
	    	<tr>{geRow}</tr>
	    );
  	}
}