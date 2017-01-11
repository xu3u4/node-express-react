import React from 'react';

const ActionCell = ({ action, children }) => <td><button onClick={ action } >{ children }</button></td>;

ActionCell.propTypes = {
    action: React.PropTypes.func.isRequired,
    children: React.PropTypes.string
};

export default ActionCell;
