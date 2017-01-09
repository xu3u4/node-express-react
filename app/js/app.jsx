import React from 'react';
import ReactDOM from 'react-dom';
import MainTable from './comp_table.jsx';
import ActionBtn from './action_btn.jsx';
import EditTable from './edit_table.jsx';

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
            editmode : false
        }
        this.toggleEdit = this.toggleEdit.bind(this);
        this.updateTable = this.updateTable.bind(this);
        this.addRow = this.addRow.bind(this);
        this.handleOnchange = this.handleOnchange(this);
        this.inputCol = [];
        this.newIssue = {};
    }
    toggleEdit(){
        this.setState ({
            editmode : !this.state.editmode
        });
    }
    updateTable(newTable) {
        newTable = this.state.issueList;
        this.setState({
            issueList: newTable
        });
    }
    addRow() {

        const newList = this.state.issueList;
        newList.push(this.newIssue);
        this.setState({
            issueList: newList
        });
        console.log(this.state.issueList);
    }
    handleOnchange(key, e) {
        // const keyI = this.inputCol.indexOf(key);
        console.log(key);
        console.log(e);
        // this.newIssue[key] = e.target.value;

        // if(e.target.value && this.inputCol.indexOf(key) < 0){
        //     this.inputCol.push(key);
        // }else if(e.target.value === ""){
        //     this.inputCol.splice(keyI, 1);
        // }
        // console.log(this.props.editRow);
    }

    render() {//editing = {this.state.editmode} updateTable = {this.updateTable}

        return(
            <div>
                <ActionBtn action = {this.toggleEdit} >Edit</ActionBtn>
                <EditTable columns = { cols } addRow = { this.addRow } onChange = { this.handleOnchange } />
                <MainTable columns = { cols } rows = { infos } />

            </div>
        )

    }
}

ReactDOM.render(
    <TableFrame />,
    document.getElementById('app')
);
