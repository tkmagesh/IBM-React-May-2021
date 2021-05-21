function projectsReducer(currentState = [], action) {
    if (action.type === 'ADD_PROJECT'){
        return [...currentState, action.payload];
    }
    if (action.type === 'REMOVE_PROJECT'){
        return currentState.filter(project => project.id !== action.payload.id);
    }
    return currentState;
}
export default projectsReducer;