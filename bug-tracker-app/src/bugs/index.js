import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BugStats from './views/bugStats';
import BugEdit from './views/bugEdit';
import BugList from './views/bugList';
import './index.css';
import bugActionCreators from './actions';

const BugTracker = ({ bugs, addNew, toggle, remove, removeClosed }) => {
    return(
        <div>
            <h1>Bug Tracker</h1>
            <label>Apply Projects Filter : </label>
            <input type="checkbox" />
            <hr />
            <BugStats bugs={bugs} />
            <BugEdit addNew={addNew} />
            <BugList {...{bugs, toggle, remove, removeClosed}} />
        </div>
    )
}

function mapStateToProps(storeState){
    const data = storeState.bugsState;
    return { bugs : data };
}

function mapDispatchToProps(dispatch){
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    return bugActionDispatchers;
}


export default connect(mapStateToProps, mapDispatchToProps)(BugTracker);