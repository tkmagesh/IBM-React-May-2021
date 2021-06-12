import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { createEpicMiddleware } from 'redux-observable'
import { applyMiddleware } from 'redux';
import { filter, mapTo, tap } from 'rxjs/operators'
import { createStore } from 'redux'
import { connect, Provider } from 'react-redux';

const PING = 'PING'
const PONG = 'PONG'

const ping = function() { return { type : PING }; }
const pong = function() { return { type : PONG }; }

function pingPongReducer(currentState='Dummy', action){
  if (action.type === PING ){
    return 'PING'
  }
  if (action.type === PONG){
    return 'PONG'
  }
  return currentState
}

const pingEpic = action$ => action$.pipe(
  filter(action => action.type === PING),
  tap(action => console.log(action.type)),
  mapTo(pong())
)

const epicMiddleware = createEpicMiddleware();

const store = createStore(pingPongReducer, applyMiddleware(epicMiddleware))

epicMiddleware.run(pingEpic)

function App({state, dispatch}) {  
  return (
    <div>
      <div>{state}</div>
      <input type="button" value="Ping" onClick={() => dispatch(ping())} />
    </div>
  );
}

const ConnectedApp = connect(
  function(state){ 
    console.log(state);
    return  {state : state}; },
  function(dispatch) { 
    console.log(dispatch)
    return {dispatch : dispatch};
  }
)(App)

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ConnectedApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
