import React from 'react';

import RenderHeader from './render_header';
import RenderTbody from './render_tbody';

// component name must be Uppercamel case
const ViewIssues = (props) => {
  const handleSelectIssue = (selectIndex) => {
    props.editIssue(props.rows[selectIndex]);
    props.deleteIssue(selectIndex);
  };

  return (
    <div>
      <table>
        <RenderHeader
          columns={props.columns}
        />
        <RenderTbody
          columns={props.columns}
          rows={props.rows}
          onDeleteIssue={props.deleteIssue}
          onSelectIssue={handleSelectIssue}
          newIssue={props.newIssue}
        />
      </table>
    </div>
  );
};

ViewIssues.propTypes = {
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

export default ViewIssues;
