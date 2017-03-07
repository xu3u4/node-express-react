export function selectIssue(info) {
  const edittingInfo = Object.assign({}, info);

  return {
    type: 'ISSUE_SELECTED',
    payload: edittingInfo
  };
}

export function handleDeleteIssue(delIndex, infos) {
  infos.splice(delIndex, 1);

  return {
    type: 'ISSUE_DELETED',
    payload: infos
  };
}

export function handleInput(issue, inputField, newInput) {
  issue[inputField] = newInput;

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
