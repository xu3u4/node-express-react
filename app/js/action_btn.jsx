import React from 'react';

const ActionBtn = ({ action, children }) => <button onClick = {action} >{children}</button>;

ActionBtn.propTypes = {
    action: React.PropTypes.func.isRequired,
    children: React.PropTypes.string
};

export default ActionBtn;
