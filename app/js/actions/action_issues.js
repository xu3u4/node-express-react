export function handleDeleteIssue(deleteId) {
  return {
    type: 'ISSUE_DELETED',
    payload: deleteId
  };
}

export function selectIssue(issue) {
  return {
    type: 'ISSUE_SELECTED',
    payload: issue
  };
}
