let _currentBugId = 0;

function addNew(newBugName){
    const newBug = {
        id : ++_currentBugId,
        name : newBugName,
        isClosed : false,
        createdAt : new Date(),
        projectId : 0 //populate this with the id of the selected project
    };
    const action = { type : 'ADD_BUG', payload : newBug };
    return action;
}
export default addNew;