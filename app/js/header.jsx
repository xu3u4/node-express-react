import React from 'react';

const GenerateHeader = ({columns}) => {

    const geHead = columns.map((col) => <th key={col.key} >{col.key}</th>);

    return (
        <thead>
            <tr>{geHead}</tr>
        </thead>
    );
};

GenerateHeader.propTypes = {
    columns: React.PropTypes.array.isRequired
};

export default GenerateHeader;
