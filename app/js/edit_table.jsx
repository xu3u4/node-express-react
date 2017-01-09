import React from 'react';

export default class EditTable extends React.Component {
    constructor(props) {
        super(props);
        this.issue = {};
        this.inputCol = [];
    }

    render() {
        const createTd = this.props.columns.map((col) => {
            if(col.key !== 'Action') {
                return (
                    <td key={ col.key }>
                        <input className="input_row" type="text" ref = { col.key } onChange={ (e) => this.props.onChange(col.key, e) } />
                    </td>
                );
            }else {
                return <td key = { col.key }><button onClick={ this.props.addRow } >ADD</button></td>
            }
        });

        return (
            <tbody><tr>{ createTd }</tr></tbody>
        );
    }
}

EditTable.propTypes = {
    columns: React.PropTypes.array.isRequired,
    addRow: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired
    // editRow: React.PropTypes.object
};
