import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Cell from '../../app/js/cell';

describe('Test <cell> rendering', () => {

    it('<cell> should exist', () => {
        const value = "Jocelyn";
        const cell = shallow(<Cell value = {value} editRow = { this.editRow.bind(this, i, col.key) } />);

        expect(cell).to.exist;
        // const td = TestUtils.findRenderedDOMComponentWithTag(render, 'td');

        // expect(td).to.exist;
        // expect(td.textContent).to.equal(value);
    });
});
