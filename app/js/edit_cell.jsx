import React from 'react';

export default class EditCell extends React.Component {
	constructor(props) {
		super(props);
        this.handleChange = this.handleChange.bind(this);
        this.newTable = this.props.table;
        this.setState({
            cell: e.target.value
        });
	}
    handleChange(e) {

        this.setState({
            cell: e.target.value
        });
    }
    // handleEnter(e) {
    //     if (e.key === 'Enter') {
    //         this.setState({
    //             display: "highlight",
    //             isbanned: true
    //         });
    //         this.props.editRow(this.state.cell);
    //     } else {
    //         this.setState({
    //             display: "warning"
    //         });
    //     }

    // }
    render() {
        return (
            <td>
                <input type = "text" defaultValue = { this.props.row[this.props.col.key] } onChange = { this.handleChange } />
            </td>
        );
    }
}
EditCell.propTypes = {
    col: React.PropTypes.object.isRequired,
    row: React.PropTypes.object.isRequired,
    updateTable: React.PropTypes.func.isRequired,
    table: React.PropTypes.array.isRequired
};
