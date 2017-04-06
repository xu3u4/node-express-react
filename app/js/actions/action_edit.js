export function updateIssues(newIssue) {
  // issues.sort((a, b) => a.seq - b.seq);
  return {
    type: 'UPDATE_ISSUES',
    payload: newIssue
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
