import React from 'react';
import {observable} from "mobx";
import {observer} from "mobx-react";
import CreateRow from './create_row.jsx';
import Cell from './cell.jsx';
import EditCell from './edit_cell.jsx';

@observer 
class GenerateTbody extends React.Component {
    @observable issueList = this.props.rows;


    constructor(props, context) {
        super(props, context);
        // this.state = {
        //     issueList: this.props.rows
        // };
        // this.issueList = this.props.rows;
        this.deleteRow = this.deleteRow.bind(this);

    }
    addRow(issue) {
        // const issueList = this.state.issueList;

        // issue.newadd = true;
        // issueList.push(issue);
        // this.setState({
        //     issueList: issueList
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
        this.issueList.splice(i, 1);
    }

    render() {
        const editing = false;
        const geRow = this.issueList.map((row, i) =>
            <tr key = { i } className = { row.newadd ? 'highlight' : null } >
                {
                    this.props.columns.map((col) => {
                        if(col.key !== 'Action') {
                            if(editing) {
                                return <EditCell key = { col.key } value = { row[col.key] } editRow = { this.editRow.bind(this, i, col.key) } />
                            }else {
                                return <Cell key = { col.key } value = { row[col.key] }/>
                            }
                        } else {
                            return <td key = { col.key }><button onClick={ () => this.deleteRow(i) } >Delete</button></td>
                        }
                    })
                 }
                
            </tr>
        );

        return (
            <tbody>
                <CreateRow col = { this.props.columns } addRow = { this.addRow.bind(this) }/>
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
