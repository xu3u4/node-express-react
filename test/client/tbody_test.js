import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import TestUtils from 'react-addons-test-utils';
import GenerateTbody from '../../app/js/tbody';

describe('Test <GenerateTbody> rendering', () => {
    const cols = [
        { key: 'seq', label: 'seq' },
        { key: 'Status', label: 'Status' },
        { key: 'Category', label: 'Category' },
        { key: 'Title', label: 'Title' },
        { key: 'Owner', label: 'Owner' },
        { key: 'Priority', label: 'Priority' },
        { key: 'Action', label: 'Action' }
    ];
    const infos = [
        { seq: '1', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '1' },
        { seq: '2', Status: 'Open', Category: 'cat2', Title: 'title2', Owner: 'Jocelyn', Priority: '2' }
    ];

    beforeEach(function() {
        const handleDeleteRow = sinon.stub();
        const toggleEdit = sinon.stub();
        this.newEdit = "1"
        this.tbody = shallow(
            <GenerateTbody columns={ cols } rows={ infos } onDeleteRow={ handleDeleteRow } toggleEdit={ toggleEdit } newEdit={ this.newEdit } />
        );
    });

    it('should render different cells in <tbody>', function() {
        expect(this.tbody.type()).equal('tbody');
        expect(this.tbody.find('tr').children()).to.have.length(cols.length*infos.length);

        cols.forEach((col, id) => {
            if(col.key === 'Action'){
                expect(this.tbody.find('tr').first().childAt(id).name()).equal('ActionCell');
            }else{
                expect(this.tbody.find('tr').first().childAt(id).name()).equal('Cell');
            }
        });
    });

    it('should have different color if just updated', function() {
        expect(this.tbody.childAt(this.newEdit-1).hasClass('highlight')).to.be.true;
        expect(this.tbody.not('.highlight')).to.have.length(infos.length - 1);
    });
});
