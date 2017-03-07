import React from 'react';

import RenderHeader from './render_header.jsx';
import Cell from './cell.jsx';
import ActionCell from './action_cell.jsx';

const RenderTable = (props) => {
  
  const renderRow = props.rows.map((row, i) => (
    <tr
      key={row.seq}
      onDoubleClick={() => props.onSelectIssue(i)}
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
          return <Cell key={col.key} >{row[col.key]}</Cell>;
        })
      }
    </tr>
  ));
  
  return (
    <table>
      <RenderHeader columns={props.columns} />
      <tbody>{renderRow}</tbody>
    </table>
  );
};

export default RenderTable;

