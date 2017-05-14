import React from 'react';

const Cell = ({ children }) => <td>{ children }</td>;

Cell.propTypes = {
  children: React.PropTypes.string.isRequired
};

export default Cell;
