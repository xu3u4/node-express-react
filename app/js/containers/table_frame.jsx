import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectIssue, handleDeleteIssue } from '../actions/action_issues';

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
    this.props.onSelectIssue(this.props.rows[selectIndex]);
    this.props.onDeleteIssue(selectIndex);
  }

  render() {
    return (
      <div>
        <table>
          <RenderHeader columns={this.props.columns} />
          <RenderTbody
            columns={this.props.columns}
            rows={this.props.rows}
            onDeleteIssue={this.props.onDeleteIssue}
            onSelectIssue={this.handleSelectIssue}
            newIssue={this.props.newIssue}
          />
          <EditTbody />
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // whatever is returned will show up as props (this.props.rows) here
  return {
    rows: state.IssuesReducer,
    columns: state.HeadsReducer,
    newIssue: state.ActiveReducer.newIssue
  };
}

// Anything returned from here will be as props on this container
function mapDispatchToProps(dispatch) {
  // whenever selectIssue is called, the result shold be passed to all reducers
  return bindActionCreators({
    onSelectIssue: selectIssue,
    onDeleteIssue: handleDeleteIssue
  }, dispatch);
}

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
  newIssue: React.PropTypes.shape({
    seq: React.PropTypes.string,
    Status: React.PropTypes.string,
    Category: React.PropTypes.string,
    Title: React.PropTypes.string,
    Owner: React.PropTypes.string,
    Priority: React.PropTypes.string
  }).isRequired,
  onSelectIssue: React.PropTypes.func.isRequired,
  onDeleteIssue: React.PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TableFrame);
