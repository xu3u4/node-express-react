import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleInput, updateIssues, clearInputs, showWarning } from '../actions/action_edit';

import ActionCell from '../components/action_cell.jsx';
import Cell from '../components/cell.jsx';
import EditCell from '../components/edit_cell.jsx';

class EditTbody extends Component {
  handleInput(key, value) {
    this.props.selectedIssue[key] = value;
    this.props.handleInput(this.props.selectedIssue);
  }

  updateIssues() {
    const inputFields = Object.keys(this.props.selectedIssue).filter((key) => {
      // exclude seq, cause it is auto generated
      return key !== 'seq' && this.props.selectedIssue[key].length;
    });

    if (Object.values(inputFields).length < 5) {
      this.props.showWarning();
      return;
    }
    this.props.updateIssues(this.props.selectedIssue);
    this.props.clearInputs();
  }

  renderEditRow() {
    return (this.props.columns.map((col) => {
      switch (col.key) {
        case 'seq':
          return <Cell key={col.key}>{col.key}</Cell>;
        case 'Action':
          return (
            <ActionCell
              key={col.key}
              action={() => this.updateIssues()}
            >
              {this.props.selectedIssue.seq ? 'Update' : 'Add'}
            </ActionCell>
          );
        default:
          return (
            <EditCell
              key={col.key}
              columnName={col.key}
              onInput={(event) => this.handleInput(col.key, event.target.value)}
              editingIssue={this.props.selectedIssue}
              isShowWarning={this.props.isShowWarning}
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
    selectedIssue: state.ActiveReducer.selectedIssue,
    isShowWarning: state.ActiveReducer.isShowWarning
  };
}

function mapDispatchtoProps(dispatch) {
  return bindActionCreators({
    handleInput,
    updateIssues,
    clearInputs,
    showWarning
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
  updateIssues: React.PropTypes.func.isRequired,
  clearInputs: React.PropTypes.func.isRequired,
  showWarning: React.PropTypes.func.isRequired,
  isShowWarning: React.PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchtoProps)(EditTbody);
