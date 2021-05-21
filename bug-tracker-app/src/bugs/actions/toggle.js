import bugApi from '../services/bugApi';

function toggle(bugToToggle){
    const toggledBugData = { ...bugToToggle, isClosed : !bugToToggle.isClosed };
    return bugApi
        .save(toggledBugData)
        .then(toggledBug => {
            const action = { type : 'UPDATE_BUG', payload : toggledBug }
            return action;
        })
}
export default toggle;
