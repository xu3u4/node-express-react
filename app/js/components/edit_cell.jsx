import React from 'react';

const EditCell = (props) =>
  <td>
    <input className="input_row" onChange={props.onInput} value={props.children} />
  </td>;

export default EditCell;
