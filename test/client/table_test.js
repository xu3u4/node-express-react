import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import TableFrame from '../../app/js/container/table_frame'; //'export default' component can't use import { component } from ...
import GenerateHeader from '../../app/js/header';
import EditTbody from '../../app/js/edit_tbody';
import GenerateTbody from '../../app/js/tbody';

require('../utils/dom-mock')('<html><body></body></html>');

describe('Render <TableFrame>', () => {
    const colls = [
        { key: 'seq', label: 'seq' },
        { key: 'Status', label: 'Status' },
        { key: 'Category', label: 'Category' },
        { key: 'Title', label: 'Title' },
        { key: 'Owner', label: 'Owner' },
        { key: 'Priority', label: 'Priority' }
    ];
    const infos = [
        { seq: '1', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '1' },
        { seq: '2', Status: 'Open', Category: 'cat2', Title: 'title2', Owner: 'Jocelyn', Priority: '2' }
    ];
    // define Shallow rendering and declare required props.
    // ps. this. is not compatible with ES6 arrow function...
    beforeEach(function() {
        this.table = mount(
            <TableFrame cols={ colls } infos={ infos } />
        );
    });

    // check the children structure
    it('should render <TableFrame>\'s child components', function() {
        const handleEdit = sinon.stub();
        const handleChange = sinon.stub();
        // const handleDeleteRow = sinon.stub();
        // const toggleEdit = sinon.stub();
        expect(this.table.contains(
            <EditTbody columns = {colls} onChange = {handleChange} onEditRow = {handleEdit} editingRow={ {undefined} } editing={ true }/>
        )).to.be.true;

        // expect(this.table.containsAllMatchingElements([
        //     <GenerateHeader columns = {colls} />,
        //     <EditTbody columns = {colls} onChange = {handleChange} onEditRow = {handleEdit} />
        // ])).to.be.true;

        // expect(this.table.containsAllMatchingElements([
        //     <GenerateHeader columns = {colls} />,
        //     <EditTbody columns = {colls} onChange = {handleChange} onEditRow = {handleEdit} />,
        //     <GenerateTbody columns = {colls} rows = {infos} onDeleteRow={handleDeleteRow} toggleEdit = {toggleEdit} />
        // ])).to.be.true;
    });
});
