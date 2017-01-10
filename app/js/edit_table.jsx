import React from 'react';
import ActionBtn from './action_btn.jsx';
import EditCell from './edit_cell.jsx';

const EditTable = (props) => {
    const createTd = props.columns.map((col) => {
        switch (col.key) {
            case 'Action':
                return <td key = { col.key }><ActionBtn action={ props.addRow } >{props.editing ? "Update" : "Add" }</ActionBtn></td>;
            case 'seq':
                return <td key = { col.key }>{props.List[col.key]}</td>;
            default:
                return (
                    <EditCell key={ col.key } handleInput={ (e) => props.onChange(col.key, e) } >{props.List[col.key] || ""}</EditCell>
                );

        }
    });

    return (
        <tbody><tr>{ createTd }</tr></tbody>
    );
};

EditTable.propTypes = {
    columns: React.PropTypes.array.isRequired,
    addRow: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    List: React.PropTypes.object,
    editing: React.PropTypes.bool
};

export default EditTable;
