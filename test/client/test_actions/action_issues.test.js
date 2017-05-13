import * as actions from '../../../app/js/actions/action_index';
import { expect } from 'chai';

describe('actions issues', () => {
  it('update issues', () => {
    expect(actions.updateIssues({ seq: '1', Status: 'Open', Owner: 'Allen'})).to.eql({
      type: 'UPDATE_ISSUES',
      payload: { seq: '1', Status: 'Open', Owner: 'Allen'}
    });
  });

  it('show warning', () => {
    expect(actions.showWarning()).to.eql({
      type: 'SHOW_WARNING',
      payload: true
    });
  });

  it('delete issue', () => {
    expect(actions.deleteIssue(1)).to.eql({
      type: 'ISSUE_DELETED',
      payload: 1
    });
  });

  it('edit issue', () => {
    expect(actions.editIssue({})).to.eql({
      type: 'ACTIVE_ISSUE',
      payload: {}
    });
  });
});