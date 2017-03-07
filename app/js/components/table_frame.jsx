import React from 'react';
import EditTbody from '../containers/edit_tbody.jsx';
import RenderTable from '../containers/render_table.jsx';
// import Message from '../message.jsx';
import '../../css/table.scss';

// component name must be Uppercamel case

const TableFrame = () => (
  <div>
    <RenderTable />
    <table>
      <EditTbody />
    </table>
  </div>
);

export default TableFrame;
