import React from 'react';

const ActionCell = (props) => (
  <td>
    <button onClick={props.action}>{ props.children }</button>
  </td>
);

ActionCell.propTypes = {
  children: React.PropTypes.string.isRequired,
  action: React.PropTypes.func.isRequired
};

export default ActionCell;
