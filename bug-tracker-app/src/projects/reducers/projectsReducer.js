function projectsReducer(currentState = [], action) {
    if (action.type === 'ADD_PROJECT'){
        return [...currentState, action.payload];
    }
    if (action.type === 'REMOVE_PROJECT'){
        return currentState.filter(project => project.id !== action.payload.id);
    }
    if (action.type === 'INIT_PROJECTS'){
        return action.payload;
    }
    return currentState;
}
export default projectsReducer;