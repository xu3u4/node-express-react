import React from 'react';

const ActionCell = (props) => 
    <td><button onClick = { props.action } >{ props.children }</button></td>;

ActionCell.propTypes = {
    children: React.PropTypes.string,
    action: React.PropTypes.func
};

export default ActionCell;
