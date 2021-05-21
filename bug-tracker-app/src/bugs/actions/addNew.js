import bugApi from '../services/bugApi'

function addNew(newBugName, projectId){
    return function(dispatch){
        const newBugData = {
            id : 0,
            name : newBugName,
            isClosed : false,
            createdAt : new Date(),
            projectId : projectId //populate this with the id of the selected project
        };
        bugApi
            .save(newBugData)
            .then(function(newBug){
                const action = { type : 'ADD_BUG', payload : newBug };
                dispatch(action);
            })
    }
}
export default addNew;