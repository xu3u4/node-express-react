export default function (state = {
  issues: [
    { seq: '1', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '1' },
    { seq: '2', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '2' },
    { seq: '3', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '3' },
    { seq: '4', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '4' }
  ],
  selectedIssue: {},
  newIssue: '',
  isShowWarning: false
}, action) {
  switch (action.type) {
    case 'ISSUE_DELETED':
      return {
        ...state,
        issues: [
          ...state.issues.slice(0, action.payload),
          ...state.issues.slice(action.payload + 1)
        ]
      };
    case 'UPDATE_ISSUES': {
      action.payload.seq =
        state.issues.length ?
          (action.payload.seq || (1 + Number(state.issues[state.issues.length - 1].seq))
          .toString())
          : '1';
      const orderedArray = [
        ...state.issues,
        action.payload
      ];
      orderedArray.sort((prev, next) => prev.seq - next.seq);
      return {
        isShowWarning: false,
        newIssue: action.payload.seq,
        selectedIssue: {},
        issues: orderedArray
      };
    }
    case 'SHOW_WARNING':
      return {
        ...state,
        isShowWarning: action.payload
      };
    case 'ACTIVE_ISSUE':
      return {
        ...state,
        newIssue: '',
        selectedIssue: action.payload,
        isShowWarning: false
      };
    default:
      return state;
  }
}
