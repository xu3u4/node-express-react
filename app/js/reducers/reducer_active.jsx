export default function (state = {
  selected_issue: {},
  new_issue: {}
}, action) {
  switch (action.type) {
    case 'ISSUE_SELECTED':
    case 'FIELD_INPUT':
      return {
        selected_issue: action.payload
      };
    default:
      return state;
  }
}
