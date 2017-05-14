import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import ActionCell from '../../../app/js/components/common/action_cell';

describe ('Render <ActionCell>', () => {
  const onAction = sinon.stub();
  const action = 'Delete';
  let actionCell;
  
  beforeEach(() => {
    actionCell = shallow(
        <ActionCell action={ onAction } >{ action }</ActionCell>
    );
  });
  it ('should render <button> inside <td>', () => {
    expect(actionCell.type()).to.equal('td');
    expect(actionCell.find('td').children().type()).to.equal('button');
    expect(actionCell.text()).to.equal(action);
  });

  it ('should call onAction when click', () => {
    actionCell.find('button').simulate('click');
    expect(onAction.calledOnce).to.be.true;
  });
});