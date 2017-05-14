import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import EditCell from '../../../app/js/components/common/edit_cell';

describe('Render <EditCell>', () => {
  const onChange = sinon.stub();
  let isShowWarning = false;
  let editcell;
  let value = '';

  beforeEach(() => {
    editcell = shallow(
      <EditCell onInput={ onChange } isShowWarning={ isShowWarning }>{ value }</EditCell>
    );
  });

  it('should have <input> inside <td>', () => {
    expect(editcell.type()).to.equal('td');
    expect(editcell.find('.input_row').type()).to.equal('input');
  });

  it('should call onChange when input', () => {
    editcell.find('input').simulate('change');
    expect(onChange.calledOnce).to.be.true;
  });

  describe('if value is set', () => {
    value = 'cat1';

    it('input should have default value', () => {
      expect(editcell.find('input').prop('value')).to.equal('cat1');
    });
  });
});