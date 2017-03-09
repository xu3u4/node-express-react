import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleInput, updateIssues } from '../actions/index.jsx';

import ActionCell from '../components/action_cell.jsx';
import Cell from '../components/cell.jsx';
import EditCell from '../components/edit_cell.jsx';

class EditTbody extends Component {
  handleInput(key, value) {
    this.props.selectedIssue.seq = this.props.selectedIssue.seq || (1+Number(this.props.rows[this.props.rows.length-1].seq)).toString();
    this.props.selectedIssue[key] = value;
    this.props.handleInput(this.props.selectedIssue);
  }
  updateIssues() {
    if (Object.keys(this.props.selectedIssue).length < 5){
      return;
    }
    this.props.rows.push(this.props.selectedIssue);
    this.props.updateIssues(this.props.rows);
    this.props.handleInput({});
  }
  renderEditRow() {
    return (this.props.columns.map((col) => {
      switch (col.key) {
        case 'Action':
          return (
            <ActionCell
              key={col.key}
              action={() => this.updateIssues()}
            >
              {this.props.selectedIssue.seq ? 'Update' : 'Add'}
            </ActionCell>
          );
        case 'seq':
          return <Cell key={col.key}>New</Cell>;
        default:
          return (
            <EditCell
              key={col.key}
              onInput={(event) => this.handleInput(col.key, event.target.value)}
              editingIssue={this.props.selectedIssue}
              columnName={col.key}
            >
              {this.props.selectedIssue[col.key] || ''}
            </EditCell>
          );
      }
    }));
  }
  render() {
    return <tbody><tr>{this.renderEditRow()}</tr></tbody>;
  }

}

function mapStateToProps(state) {
  return {
    columns: state.HeadsReducer,
    selectedIssue: state.ActiveIssue.selected_issue
  };
}

function mapDispatchtoProps(dispatch) {
  return bindActionCreators({
    handleInput: handleInput,
    updateIssues: updateIssues
  }, dispatch);
}

EditTbody.propTypes = {
  columns: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      key: React.PropTypes.string,
      label: React.PropTypes.string
    })
  ).isRequired,
  selectedIssue: React.PropTypes.shape({
    seq: React.PropTypes.string,
    Status: React.PropTypes.string,
    Category: React.PropTypes.string,
    Title: React.PropTypes.string,
    Owner: React.PropTypes.string,
    Priority: React.PropTypes.string
  }).isRequired,
  handleInput: React.PropTypes.func.isRequired,
  updateIssues: React.PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchtoProps)(EditTbody);
