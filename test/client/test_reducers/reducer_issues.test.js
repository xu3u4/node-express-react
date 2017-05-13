import issues from '../../../app/js/reducers/reducer_issues';
import { expect } from 'chai';

const originIssues = [
  { seq: '1', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '1' },
  { seq: '2', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '2' },
  { seq: '3', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '3' },
  { seq: '4', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '4' }
];

describe('reducer_issues.js', () => {
  it('should handle initial state', () => {
    expect(issues(undefined, {})).to.eql({
      issues: originIssues,
      selectedIssue: {},
      newIssue: '',
      isShowWarning: false
    });
  });

  it('should handle ISSUE_DELETED', () => {
    expect(issues(undefined, {
      type: 'ISSUE_DELETED',
      payload: 1
    })).to.eql({
      issues: [
        { seq: '1', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '1' },
        { seq: '3', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '3' },
        { seq: '4', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '4' }
      ],
      selectedIssue: {},
      newIssue: '',
      isShowWarning: false
    });
  });

  describe('should handle UPDATE_ISSUES', () => {
    it('when data modefied', () => {
      expect(issues({
        issues: [
          { seq: '1', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '1' },
          { seq: '3', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '3' },
          { seq: '4', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '4' }
        ]
      }, {
        type: 'UPDATE_ISSUES',
        payload: { seq: '2', Status: 'Close', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '2' }
      })).to.eql({
        issues: [
          { seq: '1', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '1' },
          { seq: '2', Status: 'Close', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '2' },
          { seq: '3', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '3' },
          { seq: '4', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '4' }
        ],
        selectedIssue: {},
        newIssue: '2',
        isShowWarning: false
      });
    });

    it('when data added', () => {
      expect(issues(undefined, {
        type: 'UPDATE_ISSUES',
        payload: { Status: 'Close', Category: 'cat3', Title: 'title2', Owner: 'Jo', Priority: '3' }
      })).to.eql({
        issues: [
          { seq: '1', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '1' },
          { seq: '2', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '2' },
          { seq: '3', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '3' },
          { seq: '4', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '4' },
          { seq: '5', Status: 'Close', Category: 'cat3', Title: 'title2', Owner: 'Jo', Priority: '3' }
        ],
        selectedIssue: {},
        newIssue: '5',
        isShowWarning: false
      });
    });    
  });

  it('should handle SHOW_WARNING', () => {
    expect(issues(undefined, {
      type: 'SHOW_WARNING',
      payload: true
    })).to.eql({
      issues: originIssues,
      selectedIssue: {},
      newIssue: '',
      isShowWarning: true
    });
  });

  describe('when handle ACTIVE_ISSUE', () => {
    it('should set selected issue', () => {
      expect(issues(undefined, {
        type: 'ACTIVE_ISSUE',
        payload: { seq: '1', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '1' }
      })).to.eql({
        issues: originIssues,
        selectedIssue: { seq: '1', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '1' },
        newIssue: '',
        isShowWarning: false
      });
    });

    it('should put previous selected issue to newIssue', () => {
      expect(issues({
        selectedIssue: { seq: '1', Status: 'open', Owner: 'Jo'}
      }, {
        type: 'ACTIVE_ISSUE',
        payload: {}
      })).to.eql({
        selectedIssue: {},
        newIssue: '',
        isShowWarning: false
      });
    });
  });
});