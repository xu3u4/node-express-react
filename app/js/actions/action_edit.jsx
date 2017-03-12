export function updateIssues(issues) {
  return {
    type: 'UPDATE_ISSUES',
    payload: issues
  };
}

export function handleInput(issue) {
  return {
    type: 'FIELD_INPUT',
    payload: issue
  };
}

export function clearInputs() {
  return {
    type: 'CLEAR_INPUTS',
    payload: {}
  };
}

export function showWarning() {
  return {
    type: 'SHOW_WARNING',
    payload: true
  };
}
