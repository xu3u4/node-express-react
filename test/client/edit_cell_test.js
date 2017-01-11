import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import EditCell from '../../app/js/edit_cell';

describe('Render <EditCell>', () => {
	it('should have <input> inside <td>', () => {
		const value = 'cat1';
		const onChange = sinon.stub();
		const editcell = shallow(
			<EditCell onInput={ onChange } >{ value }</EditCell>
		);

		expect(editcell.type()).to.equal('td');
		expect(editcell.find('.input_row').type()).to.equal('input');
		expect(editcell.find('input').prop('value')).to.equal('cat1');
	});
});