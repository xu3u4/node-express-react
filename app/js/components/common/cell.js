import React from 'react';

const Cell = ({ children }) => <td>{ children }</td>;

Cell.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
};

Cell.defaultProps = {
  children: ''
};

export default Cell;
