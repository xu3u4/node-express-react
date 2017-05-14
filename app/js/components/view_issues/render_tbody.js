import React from 'react';

import Cell from '../common/cell';
import ActionCell from '../common/action_cell';

const RenderTbody = (props) => {
  const renderRow = props.rows.map((row, i) => (
    <tr
      key={row.seq}
      onDoubleClick={() => props.onSelectIssue(i)}
      className={props.newIssue === row.seq ? 'highlight' : null}
    >
      {
        props.columns.map((col) => {
          if (col.key === 'Action') {
            return (
              <ActionCell
                key={col.key}
                action={() => props.onDeleteIssue(i)}
              >
                Delete
              </ActionCell>
            );
          }
          return <Cell key={col.key} >{ row[col.key] }</Cell>;
        })
      }
    </tr>
  ));

  return (
    <tbody>{ renderRow }</tbody>
  );
};

RenderTbody.propTypes = {
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
  columns: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      key: React.PropTypes.string,
      label: React.PropTypes.string
    })
  ).isRequired
};

export default RenderTbody;
