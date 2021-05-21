import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BugStats from './views/bugStats';
import BugEdit from './views/bugEdit';
import BugList from './views/bugList';
import './index.css';
import bugActionCreators from './actions';

const BugTracker = ({ bugs, addNew, toggle, remove, removeClosed, projects, applyFilter }) => {
    return(
        <div>
            <h1>Bug Tracker</h1>
            <label>Apply Projects Filter : </label>
            <input type="checkbox" onChange={evt => applyFilter(evt.target.checked)} />
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
    const { bugsState : bugs, projectsState, projectsFilterState } = storeState;
    const { applyFilter, selectedProject } = projectsFilterState;
    const bugsToDisplay = (applyFilter && selectedProject) ? (bugs.filter(bug => bug.projectId === selectedProject.id)) : bugs;
    const data = bugsToDisplay.map(bug => ({...bug, projectName : projectsState.find(p => p.id === bug.projectId).name}))
    return { bugs : data, projects : projectsState };
}

function mapDispatchToProps(dispatch){
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    return bugActionDispatchers;
}


export default connect(mapStateToProps, mapDispatchToProps)(BugTracker);