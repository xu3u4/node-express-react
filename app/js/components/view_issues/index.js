import React, { Component } from 'react';

import RenderHeader from './render_header';
import RenderTbody from './render_tbody';

// component name must be Uppercamel case
class ViewIssues extends Component {
  constructor(props) {
    super(props);
    this.handleSelectIssue = this.handleSelectIssue.bind(this);
  }

  componentDidMount() {
    if (this.props.rows.length < 2) this.props.getIssues();
  }

  handleSelectIssue(selectIndex) {
    this.props.editIssue(this.props.rows[selectIndex]);
    this.props.removeIssueTemp(selectIndex);
  }

  render() {
    return (
      <div>
        <table>
          <RenderHeader
            columns={this.props.columns}
          />
          <RenderTbody
            columns={this.props.columns}
            rows={this.props.rows}
            onDeleteIssue={(id, seq) => this.props.deleteIssue(id, seq)}
            onSelectIssue={(i) => this.handleSelectIssue(i)}
            newIssue={this.props.newIssue}
          />
        </table>
      </div>
    ); // end return
  } // end render
} // end class

ViewIssues.propTypes = {
  rows: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      seq: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
      ]),
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
  newIssue: React.PropTypes.number.isRequired,
  editIssue: React.PropTypes.func.isRequired,
  deleteIssue: React.PropTypes.func.isRequired,
  removeIssueTemp: React.PropTypes.func.isRequired,
  getIssues: React.PropTypes.func.isRequired
};

export default ViewIssues;
