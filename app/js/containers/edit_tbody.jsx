import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleInput } from '../actions/index.jsx';

import ActionCell from '../action_cell.jsx';
import Cell from '../components/cell.jsx';
import EditCell from '../edit_cell.jsx';

class EditTbody extends Component {
    renderEditRow() {
        return (this.props.columns.map((col) => {
            switch (col.key) {
                case 'Action':
                    return <ActionCell key={ col.key } >{ this.props.selectedIssue.seq  ? 'Update' : 'Add' }</ActionCell>;
                case 'seq':
                    return <Cell key={ col.key }></Cell>;
                default:
                    return (
                        <EditCell
                            key = { col.key }
                            onInput = { this.props.handleInput }
                            editingIssue = { this.props.selectedIssue }
                            columnName = { col.key } >
                            { this.props.editingIssue[col.key] || this.props.selectedIssue[col.key] || '' }
                        </EditCell>
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
        selectedIssue: state.ActiveIssue.selected_issue,
        editingIssue: state.ActiveIssue.new_issue
    };
};

function mapDispatchtoProps(dispatch) {
    return bindActionCreators({ handleInput: handleInput
                              }, dispatch);
}

export default connect(mapStateToProps, mapDispatchtoProps)(EditTbody);
