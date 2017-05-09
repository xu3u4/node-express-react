export function updateIssues(newIssue) {
  return {
    type: 'UPDATE_ISSUES',
    payload: newIssue
  };
}

export function showWarning() {
  return {
    type: 'SHOW_WARNING',
    payload: true
  };
}

export function deleteIssue(deleteId) {
  return {
    type: 'ISSUE_DELETED',
    payload: deleteId
  };
}

export function editIssue(issue) {
  return {
    type: 'ACTIVE_ISSUE',
    payload: issue
  };
}
