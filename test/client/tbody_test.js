import React from 'react';
import { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import GenerateTbody from '../../app/js/tbody';

describe('Test <GenerateTbody> rendering', () => {
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

    beforeEach( function() {
        React.createElement(React.DOM.table);
        this.render = TestUtils.renderIntoDocument(
            <GenerateTbody columns = {colls} rows = {infos} />
        );
    });

    it('Render <tbody>', function() {
        let find_body = TestUtils.findRenderedDOMComponentWithTag(this.render, 'tbody');

        expect(find_body).to.exist;
    });

    it('Expect to render cells', function() {
        let render_tr = TestUtils.scryRenderedDOMComponentsWithTag(this.render, 'tr');

        expect(render_tr.length).to.equal(infos.length);
        infos.forEach((info, id) => {
            expect(render_tr[id].childNodes.length).to.equal(colls.length);
            colls.forEach((coll, ind) => {
                expect(render_tr[id].childNodes[ind].textContent).to.equal(info[coll.key]);
            });
        });
    });
});