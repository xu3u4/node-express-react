export default function (state = {
  issues: [
    { seq: '1', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '1' },
    { seq: '2', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '2' },
    { seq: '3', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '3' },
    { seq: '4', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '4' }]
}, action) {
  switch (action.type) {
    case 'ISSUE_DELETED':
      return {
        issues: action.payload
      };
    case 'UPDATE_ISSUES':
      action.payload.sort((a, b) => a.seq - b.seq);
      return {
        issues: action.payload
      };
    default:
      return state;
  }
}
