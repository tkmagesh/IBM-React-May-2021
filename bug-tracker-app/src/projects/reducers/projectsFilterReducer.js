const initialState = {
    selectedProject : null,
    applyFilter : false
}
function projectsFilterReducer(currentState = initialState, action){
    if (action.type === 'SET_SELECTED_PROJECT'){
        return { ...currentState, selectedProject : action.payload }
    }
    if (action.type === 'APPLY_FILTER'){
        return { ...currentState, applyFilter : action.payload};
    }
    return currentState;
}

export default projectsFilterReducer;