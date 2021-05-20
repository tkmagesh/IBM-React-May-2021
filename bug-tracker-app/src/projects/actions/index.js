const projectActionCreators = {
    addNew(projectName){
        const action = { type : 'ADD_PROJECT', payload : projectName};
        return action
    },
    remove(projectName){
        const action = { type : 'REMOVE_PROJECT', payload : projectName};
        return action;
    }
}
export default projectActionCreators;