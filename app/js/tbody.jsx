import React from 'react';
import CreateRow from './create_row.jsx';
import Cell from './cell.jsx';
// import update from 'immutability-helper';



export default class GenerateTbody extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            issueList: this.props.rows
        };
    }
    addRow(issue){
        const issueList = this.state.issueList;
        console.log(issue);
        issueList.push(issue);
        console.log(issueList);
        this.setState({
            issueList: issueList
        });
    }

    deleteRow(i) {
        this.state.issueList.splice(i, 1)
        this.setState({
            issueList: this.state.issueList
        });
    }
    render() {
        const geRow = this.state.issueList.map((row, i) =>
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
                <CreateRow col = {this.props.columns} addRow = {this.addRow.bind(this)}/>
                {geRow}
            </tbody>
        );
    }
}

GenerateTbody.propTypes = {
    columns: React.PropTypes.array.isRequired,
    rows: React.PropTypes.array.isRequired
};
