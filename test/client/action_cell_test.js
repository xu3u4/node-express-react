import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import ActionCell from '../../app/js/action_cell';

describe ('Render <ActionCell>', () => {
    it ('should render <button> inside <td>', () => {
        const onAction = sinon.stub();
        const action = 'Delete';
        const actionCell = shallow(
            <ActionCell action={ onAction } >{ action }</ActionCell>
        );

        expect(actionCell.type()).to.equal('td');
        expect(actionCell.find('td').children().type()).to.equal('button');
        expect(actionCell.text()).to.equal(action);
    });
});