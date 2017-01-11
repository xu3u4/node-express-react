import React from 'react';
import GenerateHeader from '../header.jsx';
import EditTbody from '../edit_tbody.jsx';
import GenerateTbody from '../tbody.jsx';
import Message from '../message.jsx';
import '../../css/table.scss';

// component name must be Uppercamel case


export default class TableFrame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            issueList: this.props.infos,
            editmode: false,
            warningClass: 'hide_class',
            selectedRow: {},
            newEdit: ""
        };
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleWriteRow = this.handleWriteRow.bind(this);
        this.handleOnchange = this.handleOnchange.bind(this);
        this.handleDeleteRow = this.handleDeleteRow.bind(this);
        this.inputColumns = [];
    }
    toggleEdit(row, i) {
        const temp = row;

        this.inputColumns = Object.keys(row);
        this.setState({
            selectedRow: temp,
            editmode: !this.state.editmode
        });
        this.handleDeleteRow(i);
    }
    handleWriteRow() {
        if (this.inputColumns.length+2 < this.props.cols.length) {
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
            this.inputColumns = [];
        }
    }
    handleOnchange(key, e) {
        const newIssue = this.state.selectedRow;
        const keyI = this.inputColumns.indexOf(key);

        newIssue[key] = e.target.value;
        this.setState({
            selectedRow: newIssue
        });

        if (e.target.value && keyI < 0) {
            this.inputColumns.push(key);
        } else if (e.target.value === '') {
            this.inputColumns.splice(keyI, 1);
        }
    }
    handleDeleteRow(i) {
        const newList = this.state.issueList;

        newList.splice(i, 1);
        this.setState({
            issueList: newList
        });
    }

    render() {
        return (
            <div>
                <Message className={ `${this.state.warningClass} warning` } >All fields should have content</Message>
                <table>
                    <GenerateHeader columns={ this.props.cols } />
                    <EditTbody columns={ this.props.cols } onWriteRow={ this.handleWriteRow } onChange={ this.handleOnchange } editingRow={ this.state.selectedRow } editing={ this.state.editmode } />
                    <GenerateTbody columns={ this.props.cols } rows={ this.props.infos } onDeleteRow={ this.handleDeleteRow } toggleEdit={ this.toggleEdit } newEdit={ this.state.newEdit } />
                </table>
            </div>
        );
    }
}

TableFrame.propTypes = {
    cols: React.PropTypes.array.isRequired,
    infos: React.PropTypes.array.isRequired
};
