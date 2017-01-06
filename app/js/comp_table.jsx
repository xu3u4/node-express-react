import React from 'react';
import GenerateHeader from './header.jsx';
import GenerateTbody from './tbody.jsx';
import '../css/table.scss';

export default class MainTable extends React.Component {

    render () {
        return (
            <div>
                <p>*Double click to edit and press "Enter" to confirm.</p>
                <table>
                    <GenerateHeader columns={ this.props.columns } />
                    <GenerateTbody columns={ this.props.columns } rows={ this.props.rows } />
                </table>
            </div>
        );
    }
}
MainTable.propTypes={
    columns: React.PropTypes.array.isRequired,
    rows: React.PropTypes.array.isRequired
};
