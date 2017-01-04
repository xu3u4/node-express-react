import React from 'react';
import { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import GenerateHeader from '../../app/js/header';

describe('Test <GenerateHeader> rendering', () => {
    const colls = [
        { key: 'seq', label: 'seq' },
        { key: 'Status', label: 'Status' },
        { key: 'Category', label: 'Category' },
        { key: 'Title', label: 'Title' },
        { key: 'Owner', label: 'Owner' },
        { key: 'Priority', label: 'Priority' }
    ];

    beforeEach(function() {
        this.render = TestUtils.renderIntoDocument(
            <GenerateHeader columns = {colls} />
        );
    });

    it('Render <thead>', function() {
        const findHeader = TestUtils.findRenderedDOMComponentWithTag(this.render, 'thead');

        expect(findHeader).to.exist;
    });

    it('Create <th> collumns', function() {
        const headers = ['seq', 'Status', 'Category', 'Title', 'Owner', 'Priority'];
        const renderHeaders = TestUtils.scryRenderedDOMComponentsWithTag(this.render, 'th');

        // check header length
        expect(renderHeaders.length).to.equal(headers.length);
        // loop to check the value of each <th>
        headers.forEach((header, id) => {
            expect(renderHeaders[id].textContent).to.equal(header);
        });
    });
});
