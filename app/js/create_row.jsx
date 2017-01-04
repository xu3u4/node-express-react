import React from 'react';

export default class CreateRow extends React.Component {
	render() {

		const createTd = this.props.col.map((col) =>
			<td key={col.key}>
				<input  className="input_row" type="string" />
			</td>
		);

		return (
			<tr>
				{createTd}
				<td><button>ADD</button></td>
			</tr>
		);
	}
}

CreateRow.propTypes = {
    col: React.PropTypes.array.isRequired
};
