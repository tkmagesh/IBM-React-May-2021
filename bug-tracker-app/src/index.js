import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

import './index.css';
import reportWebVitals from './reportWebVitals';

import appStore from './store';

import BugTracker from './bugs';
import Projects from './projects';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


ReactDOM.render(
    <Provider store={appStore}>
        <Router>
            <h1>My App </h1>
            <hr/>
            <div>
                <span> [ <Link to="/">Home</Link> ] </span>
                <span> [ <Link to="/projects">Projects</Link> ] </span>
                <span> [ <Link to="/bugs">Bugs</Link> ] </span>
            </div>
            <hr/>
            <div>
                <Switch>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/bugs">
                        <BugTracker />
                    </Route>
                    <Route path="/">
                        <App />
                    </Route>
                </Switch>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);

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


