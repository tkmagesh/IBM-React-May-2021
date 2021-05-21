let _currentProjectId = 0;
const projectActionCreators = {
    addNew(projectName){
        const newProject = {
            id : ++_currentProjectId,
            name : projectName
        }
        const action = { type : 'ADD_PROJECT', payload : newProject};
        return action
    },
    remove(project){
        const action = { type : 'REMOVE_PROJECT', payload : project};
        return action;
    }
}
export default projectActionCreators;