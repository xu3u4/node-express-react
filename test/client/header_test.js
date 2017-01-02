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

    beforeEach( function() {
        this.render = TestUtils.renderIntoDocument(
            <GenerateHeader columns = {colls} />
        );
    });

    it('Render <thead>', function() {
        let find_header = TestUtils.findRenderedDOMComponentWithTag(this.render, 'thead');

        expect(find_header).to.exist;
    });

    it('Create <th> collumns', function() {
        const headers = ['seq', 'Status', 'Category', 'Title', 'Owner', 'Priority'];
        let render_headers = TestUtils.scryRenderedDOMComponentsWithTag(this.render, 'th');

        // check header length
        expect(render_headers.length).to.equal(headers.length);
        // loop to check the value of each <th>
        headers.forEach((header, id) => {
            expect(render_headers[id].textContent).to.equal(header);
        });
    });
});
