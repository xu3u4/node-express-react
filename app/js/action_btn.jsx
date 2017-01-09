import React from 'react';

const EditBtn = ({ action, children }) => (
    <button onClick = {action} >{children}</button>
);

EditBtn.propTypes = {
    action: React.PropTypes.func.isRequired,
    children: React.PropTypes.string
};

export default EditBtn;