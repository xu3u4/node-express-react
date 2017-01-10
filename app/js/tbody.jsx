import React from 'react';
import Cell from './cell.jsx';

const GenerateTbody = (props) => {
    const toggleEdit = (row, i) => {
        props.toggleEdit(row, i);
    };
    const geRow = props.rows.map((row, i) =>
        <tr key = { i } className = { props.newEdit === row.seq ? 'highlight' : null } onDoubleClick = { () => toggleEdit(row, i) } >
            {
                props.columns.map((col) => {
                    if (col.key === 'Action') {
                        return (
                            <td key = { col.key }>
                                <button onClick={ () => props.deleteRow(i) } >Delete</button>
                            </td>
                        );
                    }

                    return <Cell key = { col.key } >{ row[col.key] }</Cell>;
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
    deleteRow: React.PropTypes.func,
    newEdit: React.PropTypes.string
};

export default GenerateTbody;
