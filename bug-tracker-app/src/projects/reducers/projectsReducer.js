function projectsReducer(currentState = [], action) {
    if (action.type === 'ADD_PROJECT'){
        return [...currentState, action.payload];
    }
    if (action.type === 'REMOVE_PROJECT'){
        return currentState.filter(project => project !== action.payload);
    }
    return currentState;
}
export default projectsReducer;