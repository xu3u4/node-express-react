import React from 'react';

const Message = ({ className, children }) => (
    <p className = {className} >{children}</p>
);

Message.propTypes = {
    children: React.PropTypes.string
};

export default Message;