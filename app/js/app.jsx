import React from 'react';
import ReactDOM from 'react-dom';
// import MainTable from './comp_table.jsx';
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
            editmode: false,
            warningClass: 'hide_class',
            selectedRow: {},
            newEdit: ""
        };
        this.toggleEdit = this.toggleEdit.bind(this);
        this.addRow = this.addRow.bind(this);
        this.handleOnchange = this.handleOnchange.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
        this.inputCol = [];
    }
    toggleEdit(row, i) {
        const temp = row;

        this.inputCol = Object.keys(row);
        this.setState({
            selectedRow: temp,
            editmode: !this.state.editmode
        });
        this.deleteRow(i);
    }
    addRow() {
        if (this.inputCol.length+2 < cols.length) {
            this.setState({
                warningClass: 'show_class'
            });
        } else {
            const newList = this.state.issueList;
            const selectedRow = this.state.selectedRow;

            selectedRow.seq = selectedRow.seq || (1+Number(newList[newList.length-1].seq)).toString();
            newList.push(this.state.selectedRow);
            newList.sort((a, b) => a.seq-b.seq);

            this.setState({
                issueList: newList,
                newEdit: this.state.selectedRow.seq,
                warningClass: 'hide_class',
                selectedRow: {},
                editmode: false
            });
            this.inputCol = [];
        }
    }
    handleOnchange(key, e) {
        const newIssue = this.state.selectedRow;
        const keyI = this.inputCol.indexOf(key);

        newIssue[key] = e.target.value;
        this.setState({
            selectedRow: newIssue
        });

        if (e.target.value && keyI < 0) {
            this.inputCol.push(key);
        } else if (e.target.value === "") {
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

    render() {
        return (
            <div>
                <Message className = { `${this.state.warningClass} warning` } >All fields should have content</Message>
                <table>
                    <GenerateHeader columns= { cols } />
                    <EditTable columns = { cols } addRow = { this.addRow } onChange = { this.handleOnchange } List = {this.state.selectedRow} editing = {this.state.editmode} />
                    <GenerateTbody columns = { cols } rows = { infos } deleteRow = { this.deleteRow } toggleEdit = {this.toggleEdit} newEdit = {this.state.newEdit} />
                </table>
            </div>
        );
    }
}

ReactDOM.render(
    <TableFrame />,
    document.getElementById('app')
);
