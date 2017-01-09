import React from 'react';
import ReactDOM from 'react-dom';
import MainTable from './comp_table.jsx';
// import ActionBtn from './action_btn.jsx';
import GenerateHeader from './header.jsx';
import EditTable from './edit_table.jsx';
import Message from './message.jsx';
import '../css/table.scss';
import GenerateTbody from './tbody.jsx';

// component name must be Uppercamel case
const cols = [
    { key: 'seq', label: 'seq' },
    { key: 'Status', label: 'Status' },
    { key: 'Category', label: 'Category' },
    { key: 'Title', label: 'Title' },
    { key: 'Owner', label: 'Owner' },
    { key: 'Priority', label: 'Priority' },
    { key: 'Action', label: 'Action' }];

const infos = [
    { seq: '1', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '1' },
    { seq: '2', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '2' },
    { seq: '3', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '3' },
    { seq: '4', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '4' }
];

class TableFrame extends React.Component {
    constructor() {
        super();
        this.state = {
            issueList: infos,
            editmode : false,
            warningClass: 'hide_class'
        }
        // this.toggleEdit = this.toggleEdit.bind(this);
        this.updateTable = this.updateTable.bind(this);
        this.addRow = this.addRow.bind(this);
        this.handleOnchange = this.handleOnchange.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
        this.inputCol = [];
        this.newIssue = {};
    }
    // toggleEdit(row, i){
    //     this.setState ({
    //         editmode : !this.state.editmode
    //     });
    // }
    updateTable(newTable) {
        newTable = this.state.issueList;
        this.setState({
            issueList: newTable
        });
    }
    addRow() {
        if(this.inputCol.length+1 < cols.length){
            this.setState({
                warningClass: 'show_class'
            });
        }else{
            const newList = this.state.issueList;
            newList.push(this.newIssue);
            this.setState({
                issueList: newList,
                warningClass: 'hide_class'
            });
            this.newIssue = {};
            this.inputCol = [];
        }
    }
    handleOnchange(key, e) {
        const keyI = this.inputCol.indexOf(key);
        this.newIssue[key] = e.target.value;

        if(e.target.value && keyI < 0){
            this.inputCol.push(key);
        }else if(e.target.value === ""){
            this.inputCol.splice(keyI, 1);
        }
    }
    deleteRow(i) {
        const newList = this.state.issueList;
        newList.splice(i, 1);
        this.setState({
            issueList: newList
        });
    }

    render() {//editing = {this.state.editmode} updateTable = {this.updateTable}

        return(
            <div>
                <Message className = { `${this.state.warningClass} warning` } >All fields should have content</Message>
                <table>
                    <GenerateHeader columns={cols} />
                    <EditTable columns = { cols } addRow = { this.addRow } onChange = { this.handleOnchange } />
                    <GenerateTbody columns = { cols } rows = { infos } deleteRow = { this.deleteRow } />
                </table>

            </div>
        )

    }
}

ReactDOM.render(
    <TableFrame />,
    document.getElementById('app')
);
