import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { editIssue, deleteIssue } from '../actions/action_index';

import RenderHeader from '../components/render_header.jsx';
import RenderTbody from '../components/render_tbody.jsx';
import EditTbody from './edit_tbody.jsx';
import '../../css/table.scss';

// component name must be Uppercamel case
class TableFrame extends Component {
  constructor(props) {
    super(props);
    this.handleSelectIssue = this.handleSelectIssue.bind(this);
  }

  handleSelectIssue(selectIndex) {
    this.props.editIssue(this.props.rows[selectIndex]);
    this.props.deleteIssue(selectIndex);
  }

  render() {
    return (
      <div>
        <table>
          <RenderHeader columns={this.props.columns} />
          <RenderTbody
            columns={this.props.columns}
            rows={this.props.rows}
            onDeleteIssue={this.props.deleteIssue}
            onSelectIssue={this.handleSelectIssue}
            newIssue={this.props.newIssue}
          />
          <EditTbody />
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  rows: state.IssuesReducer.issues,
  columns: state.HeadsReducer,
  newIssue: state.IssuesReducer.newIssue
});

// Anything returned from here will be as props on this container
const mapDispatchToProps = (dispatch) => (
  // whenever editIssue is called, the result shold be passed to all reducers
  bindActionCreators({
    editIssue,
    deleteIssue
  }, dispatch)
);

TableFrame.propTypes = {
  rows: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      seq: React.PropTypes.string,
      Status: React.PropTypes.string,
      Category: React.PropTypes.string,
      Title: React.PropTypes.string,
      Owner: React.PropTypes.string,
      Priority: React.PropTypes.string
    })
  ).isRequired,
  columns: React.PropTypes.arrayOf(React.PropTypes.shape({
    key: React.PropTypes.string,
    label: React.PropTypes.string
  })).isRequired,
  newIssue: React.PropTypes.string.isRequired,
  editIssue: React.PropTypes.func.isRequired,
  deleteIssue: React.PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TableFrame);
