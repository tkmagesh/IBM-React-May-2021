import bugApi from '../services/bugApi';

function remove(bugToRemove){
    return function(dispatch){
        bugApi
            .remove(bugToRemove)
            .then(() => {
                const action = { type : 'REMOVE_BUG', payload : bugToRemove };
                dispatch(action);
            })
    }
}
export default remove;