import { createStore, combineReducers, applyMiddleware } from 'redux';
import bugsReducer from '../bugs/reducers/bugsReducer';
import projectsReducer from '../projects/reducers/projectsReducer';
import projectsFilterReducer from '../projects/reducers/projectsFilterReducer';

const rootReducer = combineReducers({
    bugsState : bugsReducer,
    projectsState : projectsReducer,
    projectsFilterState : projectsFilterReducer
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

function asyncMiddleware(store){
    return function(next){
        return function(action){
            if (typeof action === 'function'){
                return action(store.dispatch)
            }
            return next(action);
        }
    }
}

const appStore = createStore(rootReducer, applyMiddleware(loggerMiddleware, asyncMiddleware));

export default appStore;