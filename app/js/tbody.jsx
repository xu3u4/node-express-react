import React from 'react';
import Cell from './cell.jsx';
import ActionCell from './action_cell.jsx';

const GenerateTbody = (props) => {

    const geRow = props.rows.map((row, i) =>
        <tr key={ i } className={ props.newEdit === row.seq ? 'highlight' : null } onDoubleClick={ () => props.toggleEdit(row, i) } >
            {
                props.columns.map((col) => {
                    if (col.key === 'Action') {
                        return <ActionCell key={ col.key } action={ () => props.onDeleteRow(i) } >Delete</ActionCell>;
                    }

                    return <Cell key={ col.key } >{ row[col.key] }</Cell>;
                })
             }
        </tr>
    );

    return (
        <tbody>
            { geRow }
        </tbody>
    );

};


GenerateTbody.propTypes = {
    columns: React.PropTypes.array.isRequired,
    rows: React.PropTypes.array.isRequired,
    onDeleteRow: React.PropTypes.func,
    newEdit: React.PropTypes.string
};

export default GenerateTbody;
