import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import EditTbody from '../../app/js/edit_tbody';

const cols = [
    { key: 'seq', label: 'seq' },
    { key: 'Status', label: 'Status' },
    { key: 'Category', label: 'Category' },
    { key: 'Title', label: 'Title' },
    { key: 'Owner', label: 'Owner' },
    { key: 'Priority', label: 'Priority' },
    { key: 'Action', label: 'Action' }];

describe ('Render <tbody>', () => {
    let editing = true;

    beforeEach( function() {
        const handleOnchange = sinon.stub();
        const handleEditRow = sinon.stub();
        this.editTbody = shallow(
            <EditTbody columns={ cols } onEditRow={ handleEditRow } onChange={ handleOnchange } editingRow={ {undefined} } editing={ editing }/>
        );
    });

    it('should render all columns inside <EditTbody>', function(done) {
        expect(this.editTbody.type()).equal('tbody');
        expect(this.editTbody.find('tr').children()).to.have.length(cols.length);
        done();
    });

    it('should render different td in tbody', function(done) {

        cols.forEach((col, id) => {
            if(col.key ==='Action'){
                expect(this.editTbody.find('tr').childAt(id).name()).equal('ActionCell');
            }else if(col.key ==='seq'){
                expect(this.editTbody.find('tr').childAt(id).name()).equal('Cell');
            }else {
                expect(this.editTbody.find('tr').childAt(id).name()).equal('EditCell');
            }
        });
        done();
    });

    context('when editing = true', function() {
        it('<button> should be Update', function(done) {
            expect(this.editTbody.find('ActionCell').children().text()).equal('Update');
            done();
        });
    });

    context('when editing = false', function() {
        before(() => {
            editing = false;
        });
        it('<button> should be Add', function(done) {
            expect(this.editTbody.find('ActionCell').children().text()).equal('Add');
            done();
        });
    });

    
});