import remove from './remove';

/* should be able to access the current state in the action creator without being passed from the component (UI) - FIXED */
function removeClosed(){
    return function(dispatch, getState){
        const bugs = getState().bugsState;
        const closedBugs = bugs.filter(bug => bug.isClosed);
        closedBugs
            .forEach(closedBug => remove(closedBug)(dispatch))
    }
}
export default removeClosed;