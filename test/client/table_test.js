import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import TableFrame from '../../app/js/container/table_frame';
import GenerateHeader from '../../app/js/header';
import GenerateTbody from '../../app/js/tbody';
 //'export default' component can't use import { component } from ...

describe('Render <TableFrame>', () => {
    // define Shallow rendering and declare required props.
    // ps. 'this.' is not compatible with ES6 arrow function...
    beforeEach(function() {
        this.colls = [
            { key: 'seq', label: 'seq' },
            { key: 'Status', label: 'Status' },
            { key: 'Category', label: 'Category' },
            { key: 'Title', label: 'Title' },
            { key: 'Owner', label: 'Owner' },
            { key: 'Priority', label: 'Priority' }
        ];
        this.infos = [
            { seq: '1', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '1' },
            { seq: '2', Status: 'Open', Category: 'cat2', Title: 'title2', Owner: 'Jocelyn', Priority: '2' }
        ];
        this.tableframe = shallow(<TableFrame cols = {this.colls} infos = {this.infos} />);
        
    });

    // check the children structure
    it('should render <TableFrame>\'s child components', function() {
        
    });
});
