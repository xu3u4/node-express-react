import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import GenerateHeader from '../../app/js/header';

describe('Render <GenerateHeader>', () => {
    const columns = [
        { key: 'seq', label: 'seq' },
        { key: 'Status', label: 'Status' },
        { key: 'Category', label: 'Category' },
        { key: 'Title', label: 'Title' },
        { key: 'Owner', label: 'Owner' },
        { key: 'Priority', label: 'Priority' },
        { key: 'Action', label: 'Action' }
    ];

    beforeEach(function() {
        this.thead = shallow(
            <GenerateHeader columns = {columns} />
        );
    });

    it('should render all columns inside <thead>', function() {
        const headers = ['seq', 'Status', 'Category', 'Title', 'Owner', 'Priority', 'Action'];

        expect(this.thead.type()).to.equal('thead');
        expect(this.thead.find('thead').children().type()).to.equal('tr');
        expect(this.thead.find('tr').children()).to.have.length(headers.length);
    });
});
