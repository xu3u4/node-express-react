export function selectIssue(info) {
  const edittingInfo = Object.assign({}, info);

  return {
    type: 'ISSUE_SELECTED',
    payload: edittingInfo
  };
}

export function handleDeleteIssue(newinfos) {
  console.log(infos);
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

export function updateIssues(infos, issue) {
  if(infos[issue.seq-1]){
    infos[issue.seq-1] = issue;
  }else{
    infos.push(issue);
  }
  console.log(infos);

  return {
    type: 'UPDATE_ISSUES',
    payload: infos
  }
}
