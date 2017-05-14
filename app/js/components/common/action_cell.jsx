import React from 'react';

const ActionCell = ({ action, children }) => (
  <td>
    <button onClick={action}>{ children }</button>
  </td>
);

ActionCell.propTypes = {
  children: React.PropTypes.string.isRequired,
  action: React.PropTypes.func.isRequired
};

export default ActionCell;
