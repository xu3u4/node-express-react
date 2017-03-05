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

export function handleInput(inputField, newInput) {
    console.log(inputField);
    console.log(newInput);
    issue[inputField] = newInput;

    return {
        type: 'FIELD_INPUT',
        payload: issue
    };
}