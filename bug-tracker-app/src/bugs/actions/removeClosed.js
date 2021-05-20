/* TO BE FIXED - should be able to access the current state in the action creator without being passed from the component (UI) */
function removeClosed(bugs){
    const bugsToRetain = bugs.filter(bug => !bug.isClosed)
    const action = { type : 'INIT_BUGS', payload : bugsToRetain };
    return action;
}
export default removeClosed;