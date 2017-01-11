import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import Cell from '../../app/js/cell';

describe('Render <Cell>', () => {

    it('should render <td> with children', () => {
        const value = "Jocelyn";
        const cell = shallow(
            <Cell>{ value }</Cell>
        );

        expect(cell.type()).to.equal('td');
		expect(cell.contains(value)).to.equal(true);
    });
});
