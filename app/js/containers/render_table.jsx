import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectIssue, handleDeleteIssue } from '../actions/index.jsx';

import RenderHeader from '../components/render_header.jsx';
import Cell from '../components/cell.jsx';
import ActionCell from '../components/action_cell.jsx';

class RenderTable extends Component {
  renderRow() {
    return (this.props.rows.map((row, i) => (
      <tr
        key={row.seq}
        onDoubleClick={() => this.props.onselectIssue(row)}
      >
        {
          this.props.columns.map((col) => {
            if (col.key === 'Action') {
              return (
                <ActionCell
                  key={col.key}
                  action={() => this.props.onDeleteIssue(i, this.props.rows)}
                >
                  Delete
                </ActionCell>
              );
            } else if(col.key === 'seq') {
              return <Cell key={col.key} >{i.toString()}</Cell>;
            }
            return <Cell key={col.key} >{row[col.key]}</Cell>;
          })
        }
      </tr>
    )));
  }
  render() {
    return (
      <table>
        <RenderHeader columns={this.props.columns} />
        <tbody>{this.renderRow()}</tbody>
      </table>
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
    onselectIssue: selectIssue,
    onDeleteIssue: handleDeleteIssue
  }, dispatch);
}

RenderTable.propTypes = {
  rows: React.PropTypes.arrayOf(
    React.PropTypes.shape({
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
  onselectIssue: React.PropTypes.func.isRequired,
  onDeleteIssue: React.PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(RenderTable);

