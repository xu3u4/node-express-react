import React from 'react';

const Cell = (props) => <td>{ props.children }</td>;

Cell.propTypes = {
  children: React.PropTypes.string.isRequired
};

export default Cell;
