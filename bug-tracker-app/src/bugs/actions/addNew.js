let _currentBugId = 0;

function addNew(newBugName){
    const newBug = {
        id : ++_currentBugId,
        name : newBugName,
        isClosed : false,
        createdAt : new Date()
    };
    const action = { type : 'ADD_BUG', payload : newBug };
    return action;
}
export default addNew;