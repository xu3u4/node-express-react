import React from 'react';

const EditCell = (props) =>
    <td>
        <input className="input_row" onChange = { props.handleInput } value = { props.children } />
    </td>;

EditCell.propTypes = {
    handleInput: React.PropTypes.func.isRequired,
    children: React.PropTypes.string
};

export default EditCell;
