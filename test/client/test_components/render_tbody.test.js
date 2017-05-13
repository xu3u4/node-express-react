import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import RenderTbody from '../../../app/js/components/render_tbody';

describe('Render <RenderTbody>', () => {
  const cols = [
    { key: 'seq', label: 'seq' },
    { key: 'Status', label: 'Status' },
    { key: 'Action', label: 'Action' }
  ],
  infos = [
    { seq: '1', Status: 'Open' },
    { seq: '2', Status: 'Close' }
  ];
  const handleDeleteRow = sinon.stub(),
        selectIssue = sinon.stub();
  let tbody, newIssue = "1";

  beforeEach(() => {
    tbody = shallow(
      <RenderTbody
        columns={ cols }
        rows={ infos }
        onDeleteIssue={ handleDeleteRow }
        onSelectIssue={ selectIssue }
        newIssue={ newIssue }
      />
    );
  });

  it('should render tr, td', () => {
    expect(tbody.type()).equal('tbody');
    expect(tbody.find('tr').children()).to.have.length(cols.length*infos.length);
  });

  it('should render different cell', () => {
    cols.forEach((col, id) => {
      if(col.key === 'Action'){
        expect(tbody.find('tr').first().childAt(id).name()).equal('ActionCell');
      }else{
        expect(tbody.find('tr').first().childAt(id).name()).equal('Cell');
      }
    });
  });

  it('should have different color if just updated', () => {
    expect(tbody.childAt(newIssue-1).hasClass('highlight')).to.be.true;
  });

  it('should select issue when double click', () => {
    tbody.find('tr').first().simulate('doubleclick');
    expect(selectIssue.calledOnce).to.be.true;
  });
});
