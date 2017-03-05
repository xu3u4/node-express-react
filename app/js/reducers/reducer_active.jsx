export default function(state = { 
    selected_issue: {} 
}, action) {
    console.log(action.payload);
    switch(action.type) {
        case 'ISSUE_SELECTED':
            return {
                selected_issue: action.payload
            };
        case 'FIELD_INPUT':
            return {
                newIssue: action.payload
            };
    }
    return state;
}