import React from 'react';

export default class GenerateHeader extends React.Component{

	render() {
		const geHead = this.props.columns.map((col) => {
			return <th key = {col.key} >{col.key} </th>
		});

		return (
			<thead><tr>{geHead}</tr></thead>
		);
	}
}