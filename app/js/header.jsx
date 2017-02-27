import React from 'react';

const GenerateHeader = ({columns}) => {

    const Headers = columns.map((col) => <th key={col.key} >{col.key}</th>);

    return (
        <thead>
            <tr>{Headers}</tr>
        </thead>
    );
};

GenerateHeader.propTypes = {
    columns: React.PropTypes.array.isRequired
};

export default GenerateHeader;
