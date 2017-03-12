export default function (state = {
  selectedIssue: {},
  newIssue: {},
  isShowWarning: false
}, action) {
  switch (action.type) {
    case 'ISSUE_SELECTED':
    case 'FIELD_INPUT':
      return {
        ...state,
        selectedIssue: action.payload
      };
    case 'SHOW_WARNING':
      return {
        ...state,
        isShowWarning: action.payload
      };
    case 'CLEAR_INPUTS':
      return {
        newIssue: state.selectedIssue,
        selectedIssue: action.payload,
        isShowWarning: false
      };
    default:
      return state;
  }
}
