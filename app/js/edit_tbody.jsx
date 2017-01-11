import React from 'react';
import ActionCell from './action_cell.jsx';
import Cell from './cell.jsx';
import EditCell from './edit_cell.jsx';

const EditTbody = (props) => {
    const createTd = props.columns.map((col) => {
        switch (col.key) {
            case 'Action':
                return <ActionCell key={ col.key } action={ props.onEditRow } >{ props.editing ? 'Update' : 'Add' }</ActionCell>;
            case 'seq':
                return <Cell key={ col.key }>{ props.editingRow[col.key] || '' }</Cell>;
            default:
                return (
                    <EditCell key={ col.key } onInput={ (e) => props.onChange(col.key, e) } >{ props.editingRow[col.key] || '' }</EditCell>
                );

        }
    });

    return (
        <tbody><tr>{ createTd }</tr></tbody>
    );
};

EditTbody.propTypes = {
    columns: React.PropTypes.array.isRequired,
    onEditRow: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    editingRow: React.PropTypes.object,
    editing: React.PropTypes.bool
};

export default EditTbody;
