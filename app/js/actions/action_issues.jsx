export function handleDeleteIssue(newIssues) {
  return {
    type: 'ISSUE_DELETED',
    payload: newIssues
  };
}

export function selectIssue(issue) {
  return {
    type: 'ISSUE_SELECTED',
    payload: issue
  };
}
