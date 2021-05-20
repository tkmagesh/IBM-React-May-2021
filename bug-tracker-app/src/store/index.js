import { createStore, combineReducers, applyMiddleware } from 'redux';
import bugsReducer from '../bugs/reducers/bugsReducer';
import projectsReducer from '../projects/reducers/projectsReducer';

const rootReducer = combineReducers({
    bugsState : bugsReducer,
    projectsState : projectsReducer
});

function loggerMiddleware(store){
    return function(next){
        return function(action){
            console.group(action.type);
            console.log("Before -> ", store.getState());
            console.log(action);
            next(action);
            console.log("After -> ", store.getState());
            console.groupEnd();
        }
    }
}

const appStore = createStore(rootReducer, applyMiddleware(loggerMiddleware));

export default appStore;