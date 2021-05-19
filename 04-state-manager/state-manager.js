let StateManager = (() => {
    let _currentState = null,
        _subscribers = [],
        _reducer = null;

    function getState(){
        return _currentState;
    }

    function subscribe(listenerFn){
        _subscribers.push(listenerFn);
    }

    function emitChanges(){
        _subscribers.forEach(listenerFn => listenerFn())
    }

    function dispatch(action){
        const newState = _reducer(_currentState, action);
        if (newState === _currentState) return;
        _currentState = newState;
        emitChanges();
    }

    function createStore(reducer){
        if (typeof reducer !== 'function')
            throw new Error("Invalid argument. A reducer is mandatory to create the store");
        _reducer = reducer;
        const _init_action = { type : '@@action/init' }
        _currentState = _reducer(undefined, _init_action);
        const store = { getState, subscribe, dispatch }
        return store;
    }

    return { createStore };

})()