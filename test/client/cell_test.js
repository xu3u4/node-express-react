import React from 'react';
import { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import Cell from '../../app/js/cell';

describe('Test <cell> rendering', () => {

    it('Render cells with data', () => {
        const value = "Jocelyn";
        const render = TestUtils.renderIntoDocument(
            <Cell value = {value}/>
        );
        let td = TestUtils.findRenderedDOMComponentWithTag(render, 'td');

        expect(td).to.exist;
        expect(td.textContent).to.equal(value);
    });
});
