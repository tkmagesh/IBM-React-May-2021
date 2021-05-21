import bugApi from '../services/bugApi';

function load(){
    return function(dispatch){
        bugApi
            .getAll()
            .then(bugs => {
                const action = { type : 'INIT_BUGS', payload : bugs };
                dispatch(action);
            })
    }
}

export default load;