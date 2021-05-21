import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BugStats from './views/bugStats';
import BugEdit from './views/bugEdit';
import BugList from './views/bugList';
import './index.css';
import bugActionCreators from './actions';

const BugTracker = ({ bugs, addNew, toggle, remove, removeClosed, projects }) => {
    console.table(bugs);
    return(
        <div>
            <h1>Bug Tracker</h1>
            <label>Apply Projects Filter : </label>
            <input type="checkbox" />
            <hr />
            <BugStats bugs={bugs} />
            <BugEdit addNew={addNew} projects={projects}/>
            <BugList {...{bugs, toggle, remove, removeClosed}} />
        </div>
    )
}

function mapStateToProps(storeState){
    /* const data = storeState.bugsState;
    const projects = storeState.projectsState; */
    const { bugsState : bugs, projectsState } = storeState;
    const data = bugs.map(bug => ({...bug, projectName : projectsState.find(p => p.id === bug.projectId).name}))
    return { bugs : data, projects : projectsState };
}

function mapDispatchToProps(dispatch){
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    return bugActionDispatchers;
}


export default connect(mapStateToProps, mapDispatchToProps)(BugTracker);