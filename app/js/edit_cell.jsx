import React from 'react';

export default class EditCell extends React.Component {
	constructor(props) {
		super(props);
        this.state = {
            // cell: this.props.value,
            display: "hide_class",
            isbanned: true
        };
	}
    toggleinput() {
        this.setState({
            display: "show_class",
            isbanned: false
        });
    }
    handleChange(e) {
        this.setState({
            cell: e.target.value
        });
    }
    handleEnter(e) {
        if (e.key === 'Enter') {
            this.setState({
                display: "highlight",
                isbanned: true
            });
            this.props.editRow(this.state.cell);
        } else {
            this.setState({
                display: "warning"
            });
        }

    }
    render() {
        return (
            <td onClick = { this.toggleinput.bind(this) } >
                <input type = "text" /*defaultValue = { this.state.cell } className = { this.state.display } onChange = { this.handleChange.bind(this) }
                onKeyPress = { this.handleEnter.bind(this) }*/ />
            </td>
        );
    }
}
EditCell.propTypes = {
    value: React.PropTypes.string.isRequired,
    editRow: React.PropTypes.func.isRequired
};
