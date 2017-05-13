import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import Cell from '../../../app/js/components/cell';

describe('Render <Cell>', () => {
  const value = "Jocelyn";
  const cell = shallow(
    <Cell>{ value }</Cell>
  );
  
  it('should render <td> with children', () => {
    expect(cell.type()).to.equal('td');
    expect(cell.text()).to.equal(value);
  });
});
