import React from 'react';

export default class CreateRow extends React.Component {
	constructor(){
		super();
		this.state = {
			newIssue: {}
		};
	}

	handleOnchange(key, e) {

		var issue = this.state.newIssue;

		issue[key] = e.target.value;
		this.setState({
			newIssue: issue
		});

	}
	sendRow() {
		const newIssue = {};
		for (const key in this.state.newIssue) {
			newIssue[key] = this.state.newIssue[key];
		}
		if(Object.keys(this.state.newIssue).length < this.props.col.length) {
			Object.keys(this.refs).map((key) => {
				this.refs[key].value="";
			});
		} else {
			this.props.addRow(newIssue);
		}

	}

	render() {

		const createTd = this.props.col.map((col) =>
			<td key={col.key}>
				<input  className="input_row" type="string" ref = {col.key} onChange={(e) => this.handleOnchange(col.key, e)} />
			</td>
		);

		return (
			<tr>
				{createTd}
				<td><button onClick={this.sendRow.bind(this)} >ADD</button></td>
			</tr>
		);
	}
}

CreateRow.propTypes = {
    col: React.PropTypes.array.isRequired
};
