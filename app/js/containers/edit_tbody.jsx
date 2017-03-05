import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionCell from '../action_cell.jsx';
import Cell from '../components/cell.jsx';
import EditCell from '../edit_cell.jsx';

class EditTbody extends Component {
    renderEditRow() {
        return (this.props.columns.map((col) => {
            console.log("=====");
            console.log(this.props.editingIssue[col.key]);
            switch (col.key) {
                case 'Action':
                    return <ActionCell key={ col.key } onInput = { () => this.props.handleInput(newInput) } >{ this.props.editingIssue.seq  ? 'Update' : 'Add' }</ActionCell>;
                case 'seq':
                    return <Cell key={ col.key }></Cell>;
                default:
                    return (
                        <EditCell key={ col.key } >{ this.props.editingIssue[col.key] || '' }</EditCell>
                    );

            }
        }));
    }
    render(){
        return <tbody><tr>{ this.renderEditRow() }</tr></tbody>;
    }
    
};

const mapStateToProps = function(state) {
    return {
        columns: state.HeadsReducer,
        editingIssue: state.ActiveIssue.selected_issue
    };
};

function matchDispatchtoProps(dispatch) {
    return 
        bindActionCreator({handleInput: handleInput}, dispatch);
}

export default connect(mapStateToProps)(EditTbody);
