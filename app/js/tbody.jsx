import React from 'react';
import CreateRow from './create_row.jsx';
import Cell from './cell.jsx';
import EditCell from './edit_cell.jsx';

class GenerateTbody extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            issueList: this.props.rows,
            editmode: false
        };
        // this.issueList = this.props.rows;
        this.deleteRow = this.deleteRow.bind(this);
        // this.updateTable = this.updateTable.bind(this);
        // this.addRow = this.addRow.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
    }


    toggleEdit(row, i) {
        // const row = row;
        // this.deleteRow(i);
        // this.setState ({
        //     editmode: !this.state.editmode
        // });
    }

    editRow(row, col, content) {
        // const issueList = this.state.issueList;

        // issueList[row][col] = content;
        // this.setState({
        //     issueList: issueList
        // });
    }

    deleteRow(i) {
        const newList = this.state.issueList;
        newList.splice(i, 1);
        this.setState({
            issueList: newList
        });
    }

    render() {
        const geRow = this.state.issueList.map((row, i) =>
            <tr key = { i } className = { row.newadd ? 'highlight' : null } onDoubleClick = {this.toggleEdit(row, i)} >
                {
                    this.props.columns.map((col) => {
                        if(col.key !== 'Action') {
                            return <Cell key = { col.key } value = { row[col.key] }/>
                        } else {
                            return (
                                <td key = { col.key }>
                                    <button onClick={ () => this.deleteRow(i) } >Delete</button>
                                </td>
                            )
                        }
                    })
                 }

            </tr>
        );

        return (//<CreateRow col = { this.props.columns } addRow = { this.addRow }>{this.state.editmode ? "Update" : "Add"}</CreateRow>
            <tbody>
                { geRow }
            </tbody>
        );
    }
}

GenerateTbody.propTypes = {
    columns: React.PropTypes.array.isRequired,
    rows: React.PropTypes.array.isRequired
};
export default GenerateTbody;
