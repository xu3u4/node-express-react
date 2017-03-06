export function selectIssue(info) {
    return {
            type: 'ISSUE_SELECTED',
            payload: info
    };
}

export function handleDeleteIssue(delIndex, infos) {
    console.log(delIndex);
    infos.splice(delIndex, 1);

    return {
            type: 'ISSUE_DELETED',
            payload: infos
    };
}

export function handleInput(issue, inputField, newInput) {
    const newissue = Object.assign({}, issue);
    newissue[inputField] = newInput;

    return {
        type: 'FIELD_INPUT',
        payload: newissue
    };
}