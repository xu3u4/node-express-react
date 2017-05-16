import React from 'react';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import initialState from '../../../app/js/reducers';
import TableFrame from '../../../app/js/components/table_frame';
import ViewIssuesContainer from '../../../app/js/containers/view_issues';
import ViewIssues from '../../../app/js/components/view_issues';
 //'export default' component can't use import { component } from ...



  // define Shallow rendering and declare required props.
  // ps. 'this.' is not compatible with ES6 arrow function...
describe('<ViewIssues> container', () => {
  const middleWares = [];
  const mockStore = configureStore(middleWares);
  const deleteAction = () => ({ type: 'ISSUE_DELETED' });
  let action;

  beforeEach(() => {
    const store = mockStore(initialState);
    store.dispatch(deleteAction());
    action = store.getActions();
  });

  it('dispatch action', () => {
    expect(action).to.eql([{ type: 'ISSUE_DELETED' }]);
  });
});
