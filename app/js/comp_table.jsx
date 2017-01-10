import React from 'react';
import GenerateHeader from './header.jsx';
import GenerateTbody from './tbody.jsx';
import '../css/table.scss';

export default class MainTable extends React.Component {

    render () {
        return (
            <table>
                <GenerateHeader columns={ this.props.columns } />
                <GenerateTbody columns={ this.props.columns } rows={ this.props.rows } editing = {this.props.editing} updateTable = {this.props.updateTable} />
            </table>
        );
    }
}
MainTable.propTypes={
    columns: React.PropTypes.array.isRequired,
    rows: React.PropTypes.array.isRequired
};
