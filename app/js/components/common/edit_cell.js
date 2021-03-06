import React from 'react';

const EditCell = (props) => {
  const showMessage = props.isShowWarning && !props.children.length;

  return (
    <td className="editCell">
      <input
        className={`input_row ${showMessage ? 'warning' : null}`}
        onChange={props.onInput}
        value={props.children}
      />
      <span
        className={showMessage ? 'showMessage' : 'hideMessage'}
      >
        *Required
      </span>
    </td>
  );
};

EditCell.propTypes = {
  isShowWarning: React.PropTypes.bool.isRequired,
  onInput: React.PropTypes.func.isRequired,
  children: React.PropTypes.string.isRequired
};

export default EditCell;
