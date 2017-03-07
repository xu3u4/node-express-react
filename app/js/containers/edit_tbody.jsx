import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { handleInput } from '../actions/index.jsx';

import ActionCell from '../components/action_cell.jsx';
import Cell from '../components/cell.jsx';
import EditCell from '../components/edit_cell.jsx';

class EditTbody extends Component {
  renderEditRow() {
    return (this.props.columns.map((col) => {
      switch (col.key) {

        case 'Action':
          return <ActionCell key={col.key} >{this.props.selectedIssue.seq ? 'Update' : 'Add'}</ActionCell>;
        case 'seq':
          return <Cell key={col.key}>New</Cell>;
        default:
          return (
            <EditCell
              key={col.key}
              onInput={this.props.handleInput}
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
    handleInput: handleInput
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
    Status: React.PropTypes.string,
    Category: React.PropTypes.string,
    Title: React.PropTypes.string,
    Owner: React.PropTypes.string,
    Priority: React.PropTypes.string
  }).isRequired,
  // editingIssue: React.PropTypes.shape({
  //   seq: React.PropTypes.string,
  //   Status: React.PropTypes.string,
  //   Category: React.PropTypes.string,
  //   Title: React.PropTypes.string,
  //   Owner: React.PropTypes.string,
  //   Priority: React.PropTypes.string
  // }).isRequired,
  handleInput: React.PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchtoProps)(EditTbody);
