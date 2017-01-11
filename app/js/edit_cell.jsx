import React from 'react';

const EditCell = (props) =>
    <td>
        <input className="input_row" onChange = { props.onInput } value = { props.children } />
    </td>;

EditCell.propTypes = {
    onInput: React.PropTypes.func.isRequired,
    children: React.PropTypes.string
};

export default EditCell;
