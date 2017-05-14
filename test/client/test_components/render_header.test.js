import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import RenderHeader from '../../../app/js/components/view_issues/render_header';

describe('Render <RenderHeader>', () => {
  let thead;
  const columns = [
    { key: 'seq', label: 'seq' },
    { key: 'Status', label: 'Status' }
  ];

  beforeEach(() => {
    thead = shallow(
      <RenderHeader columns = {columns} />
    );
  });

  it('should render all columns inside <thead>', function() {
    expect(thead.type()).to.equal('thead');
    expect(thead.find('thead').children().type()).to.equal('tr');
    expect(thead.find('tr').children()).to.have.length(columns.length);
  });
});
