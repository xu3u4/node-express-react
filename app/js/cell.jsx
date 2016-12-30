import React from 'react';

export default class Cell extends React.Component {
	render() {
		return (
			<td>{this.props.value}</td>
		);
	}
}
Cell.propTypes = {
	value: React.PropTypes.string.isRequired
};
