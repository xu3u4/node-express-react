export function selectIssue(info) {
  const edittingInfo = Object.assign({}, info);

  return {
    type: 'ISSUE_SELECTED',
    payload: edittingInfo
  };
}

export function handleDeleteIssue(newinfos) {
  return {
    type: 'ISSUE_DELETED',
    payload: newinfos
  };
}

export function handleInput(issue) {
  return {
    type: 'FIELD_INPUT',
    payload: issue
  };
}

export function updateIssues(infos) {
  console.log(infos);

  return {
    type: 'UPDATE_ISSUES',
    payload: infos
  }
}
