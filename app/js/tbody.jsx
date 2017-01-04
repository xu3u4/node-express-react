import React from 'react';
import CreateRow from './create_row.jsx';
import Cell from './cell.jsx';



export default class GenerateTbody extends React.Component {
    deleteRow(i) {
        this.props.rows.splice(i, 1);
    }
    render() {
        const geRow = this.props.rows.map((row, i) =>
            <tr key = {i} >
                {
                    this.props.columns.map((col) =>
                        <Cell key = {col.key} value = {row[col.key]}/>
                    )
                }
                <td><button onClick={this.deleteRow.bind(this, i)} >Delete</button></td>
            </tr>
        );

        return (
            <tbody>
                <CreateRow col = {this.props.columns} />
                {geRow}
            </tbody>
        );
    }
}

GenerateTbody.propTypes = {
    columns: React.PropTypes.array.isRequired,
    rows: React.PropTypes.array.isRequired
};
