import React from 'react';

const EditCell = (props) =>
  <td>
    <input className="input_row" onChange = { event => props.onInput(props.editingIssue, props.columnName, event.target.value) } value = { props.children } />
  </td>;

export default EditCell;
