import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectIssue, handleDeleteIssue } from '../actions/index.jsx';

import EditTbody from './edit_tbody.jsx';
import RenderTable from '../components/render_table.jsx';
// import Message from '../message.jsx';
import '../../css/table.scss';

// component name must be Uppercamel case

class TableFrame extends Component {

  constructor(props) {
    super(props);
    this.handleDeleteIssue = this.handleDeleteIssue.bind(this);
    this.handleSelectIssue = this.handleSelectIssue.bind(this);
  }

  handleDeleteIssue(deleteIndex) {
    this.props.rows.splice(deleteIndex, 1);
    this.props.onDeleteIssue(this.props.rows);
  }

  handleSelectIssue(selectIndex) {
    this.props.onSelectIssue(this.props.rows[selectIndex]);
    this.handleDeleteIssue(selectIndex);
  }

  render() {
    return (
      <div>
        <RenderTable 
          columns={this.props.columns} 
          rows={this.props.rows} 
          onDeleteIssue={this.handleDeleteIssue} 
          onSelectIssue={this.handleSelectIssue} 
        />
        <table>
          <EditTbody 
            rows={this.props.rows}
          />
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // whatever is returned will show up as props (this.props.rows) here
  return {
    rows: state.InfosReducer.infos,
    columns: state.HeadsReducer
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
  onSelectIssue: React.PropTypes.func.isRequired,
  onDeleteIssue: React.PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TableFrame);
