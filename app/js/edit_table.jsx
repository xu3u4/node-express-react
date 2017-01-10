import React from 'react';

export default class EditTable extends React.Component {
    constructor(props) {
        super(props);
        this.issue = {};
        this.inputCol = [];
    }

    render() {
        const createTd = this.props.columns.map((col) => {
            if (col.key === 'Action') {
                return <td key = { col.key }><button onClick={ this.props.addRow } >{this.props.editing ? "Update" : "Add" }</button></td>;

            } else if (col.key === 'seq') {
                return <td key = { col.key }>{this.props.List[col.key]}</td>;
            }

            return (
                <td key={ col.key }>
                    <input className="input_row" type="text" value = {this.props.List[col.key] ? this.props.List[col.key] : ""} onChange={ (e) => this.props.onChange(col.key, e) } />
                </td>
            );
        });

        return (
            <tbody><tr>{ createTd }</tr></tbody>
        );
    }
}

EditTable.propTypes = {
    columns: React.PropTypes.array.isRequired,
    addRow: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    List: React.PropTypes.object,
    editing: React.PropTypes.bool
};
