import { createStore } from 'redux';
import bugsReducer from '../bugs/reducers/bugsReducer';

const appStore = createStore(bugsReducer);

export default appStore;