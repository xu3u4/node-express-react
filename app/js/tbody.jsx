import React from 'react';
import Cell from './cell.jsx';

const GenerateTbody = (props) => {
    const geRow = props.rows.map((row, i) =>
        <tr key = { i } className = { row.newadd ? 'highlight' : null } >
            {
                props.columns.map((col) => {
                    if(col.key !== 'Action') {
                        return <Cell key = { col.key } value = { row[col.key] }/>
                    } else {
                        return (
                            <td key = { col.key }>
                                <button onClick={ () => props.deleteRow(i) } >Delete</button>
                            </td>
                        )
                    }
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
    deleteRow: React.PropTypes.func
};

export default GenerateTbody;