import React from 'react';

const RenderHeader = ({columns}) => {

    const Headers = columns.map((col) => <th key={col.key} >{col.key}</th>);

    return (
        <thead>
            <tr>{Headers}</tr>
        </thead>
    );
};

RenderHeader.propTypes = {
    columns: React.PropTypes.array.isRequired
};

export default RenderHeader;
