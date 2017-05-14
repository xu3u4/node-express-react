import React from 'react';

const RenderHeader = ({ columns }) => {
  const Headers = columns.map((col) => <th key={col.key} >{ col.key }</th>);
  return (
    <thead>
      <tr>{ Headers }</tr>
    </thead>
  );
};

RenderHeader.propTypes = {
  columns: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      key: React.PropTypes.string,
      label: React.PropTypes.string
    })
  ).isRequired
};

export default RenderHeader;
