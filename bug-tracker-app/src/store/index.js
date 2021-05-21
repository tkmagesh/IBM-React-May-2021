import { createStore, combineReducers, applyMiddleware } from 'redux';
import bugsReducer from '../bugs/reducers/bugsReducer';
import projectsReducer from '../projects/reducers/projectsReducer';
import projectsFilterReducer from '../projects/reducers/projectsFilterReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    bugsState : bugsReducer,
    projectsState : projectsReducer,
    projectsFilterState : projectsFilterReducer
});

/* function loggerMiddleware(store){
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

function asyncMiddleware({dispatch, getState}){
    return function(next){
        return function(action){
            if (typeof action === 'function'){
                return action(dispatch, getState)
            }
            return next(action);
        }
    }
} */

const promiseMiddleware = (store) => (next) => (action) => {
    if (action instanceof Promise){
        action.then( actionObj => {
            store.dispatch(actionObj);
        })
    } else {
        return next(action);
    }
}

const appStore = createStore(rootReducer, applyMiddleware(logger, thunk, promiseMiddleware));

export default appStore;