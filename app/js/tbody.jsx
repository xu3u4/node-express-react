import React from 'react';
import Cell from './cell.jsx';

export default class GenerateTbody extends React.Component {
    render() {
        const geRow = this.props.rows.map((row, i) =>
            <tr key = {i} >
                {
                    this.props.columns.map((col) =>
                        <Cell key = {col.key} value = {row[col.key]}/>
                    )
                }
            </tr>
        );

        return (
            <tbody>{geRow}</tbody>
        );
    }
}

GenerateTbody.propTypes = {
    columns: React.PropTypes.array.isRequired,
    rows: React.PropTypes.array.isRequired
};
