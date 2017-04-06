export default function (state = [
    { seq: '1', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '1' },
    { seq: '2', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '2' },
    { seq: '3', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '3' },
    { seq: '4', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '4' }
], action) {
  switch (action.type) {
    case 'ISSUE_DELETED':
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];
    case 'UPDATE_ISSUES':
      action.payload.seq = state.length ?
                          (action.payload.seq ||
                          (1 + Number(state[state.length - 1].seq))
                          .toString())
                          : '1';
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
}
