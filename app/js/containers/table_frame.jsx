import React, {Component} from 'react';
import EditTbody from './edit_tbody.jsx';
import RenderTable from './render_table.jsx';
import Message from '../message.jsx';
import '../../css/table.scss';

// component name must be Uppercamel case


export default class TableFrame extends Component {

    render() {
        return (
            <div>
                <RenderTable />
                <table>
                    <EditTbody />
                </table>
            </div>
        );
    }
}


