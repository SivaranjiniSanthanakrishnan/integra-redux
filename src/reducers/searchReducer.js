const INITIAL_STATE = {
    searchTerm : ''
}

// action.type
// action.payload

function searchReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'SEARCH_SET':
            return {...state, searchTerm: action.payload}
        default: 
            return state
    }
}

export default searchReducer;