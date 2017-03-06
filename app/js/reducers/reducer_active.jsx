export default function(state = { 
    selected_issue: {},
    new_issue: {} 
}, action) {
    
    switch(action.type) {
        case 'ISSUE_SELECTED':
            return {
                ...state,
                selected_issue: action.payload
            };
        case 'FIELD_INPUT':
            return {
                ...state,
                new_issue: action.payload
            };
    }
    console.log("reducer");
    console.log(state);
    return state;
}