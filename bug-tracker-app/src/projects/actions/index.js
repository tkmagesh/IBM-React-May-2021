import axios from 'axios';

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
    },
    setSelected(project){
        const action = { type : 'SET_SELECTED_PROJECT', payload : project}
        return action;
    },
    load(){
        return function(dispatch){
            axios.get('http://localhost:3030/projects')
                .then(response => response.data)
                .then(projects => {
                    const action = { type : 'INIT_PROJECTS', payload : projects};
                    dispatch(action);
                })
        }
    }
}
export default projectActionCreators;