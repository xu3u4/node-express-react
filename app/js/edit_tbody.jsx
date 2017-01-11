import React from 'react';
import ActionBtn from './action_btn.jsx';
import EditCell from './edit_cell.jsx';

const EditTbody = (props) => {
    const createTd = props.columns.map((col) => {
        switch (col.key) {
            case 'Action':
                return <td key={ col.key }><ActionBtn action={ props.onWriteRow } >{ props.editing ? 'Update' : 'Add' }</ActionBtn></td>;
            case 'seq':
                return <td key={ col.key }>{props.editingRow[col.key]}</td>;
            default:
                return (
                    <EditCell key={ col.key } handleInput={ (e) => props.onChange(col.key, e) } >{ props.editingRow[col.key] || '' }</EditCell>
                );

        }
    });

    return (
        <tbody><tr>{ createTd }</tr></tbody>
    );
};

EditTbody.propTypes = {
    columns: React.PropTypes.array.isRequired,
    onWriteRow: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    editingRow: React.PropTypes.object,
    editing: React.PropTypes.bool
};

export default EditTbody;
