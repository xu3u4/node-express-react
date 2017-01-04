import React from 'react';

export default class GenerateHeader extends React.Component {

	render() {
		const geHead = this.props.columns.map((col) => <th key = {col.key} >{col.key}</th>);

		return (
			<thead>
				<tr>{geHead}
					<td>Action</td>
				</tr>
			</thead>
		);
	}
}
GenerateHeader.propTypes = {
	columns: React.PropTypes.array.isRequired
};
