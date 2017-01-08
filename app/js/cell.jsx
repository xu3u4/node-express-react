import React from 'react';

const Cell = ({ value }) => (
    <td>{ value }</td>
);

Cell.propTypes = {
    value: React.PropTypes.string.isRequired
};

export default Cell;