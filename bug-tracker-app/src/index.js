import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';

import './index.css';
import reportWebVitals from './reportWebVitals';

import BugTracker from './bugs';
import bugActionCreators from './bugs/actions';
import appStore from './store';

const bugActionDispatchers = bindActionCreators(bugActionCreators, appStore.dispatch);

function renderApp(){
    const bugs = appStore.getState();
    ReactDOM.render(
        <BugTracker bugs={bugs} {...bugActionDispatchers} />,
        document.getElementById('root')
    );
}

renderApp();
appStore.subscribe(renderApp);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//ES6 Modules
/* 
import * as calculator from './calc';
calculator.add(100,200);
*/

/* 
import * as calculator from './calc';
const add = calculator.add;
add(100,200); 
*/

/* 
import * as calculator from './calc';
const { add } = calculator;
add(100,200);  
*/

/* 
import { add } from './calc';
add(100,200);  
*/ 

//importing the default exported entity
/* 
import whoAmI from './calc';
console.log(whoAmI); 
*/

/* 
import whoAmI, * as calculator from './calc';
console.log(whoAmI); 
console.log(calculator); 
*/

/* 
import whoAmI, { add, subtract } from './calc'; 
*/


