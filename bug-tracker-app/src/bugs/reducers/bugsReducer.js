function bugsReducer(currentState = [], action){
    if (action.type === 'ADD_BUG'){
        return [...currentState, action.payload];
    }
    if (action.type === 'UPDATE_BUG'){
        const bugToReplace = action.payload;
        return currentState.map(bug => bug.id === bugToReplace.id ? bugToReplace : bug );
    }
    if (action.type === 'REMOVE_BUG'){
        const bugToRemove = action.payload;
        return currentState.filter(bug => bug.id !== bugToRemove.id);
    }
    if (action.type === 'INIT_BUGS'){
        return action.payload;
    }
    return currentState;
}
export default bugsReducer;