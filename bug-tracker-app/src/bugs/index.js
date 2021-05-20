import BugStats from './views/bugStats';
import BugEdit from './views/bugEdit';
import BugList from './views/bugList';
import './index.css';

const BugTracker = ({ bugs, addNew, toggle, remove, removeClosed }) => {
    return(
        <div>
            <h1>Bug Tracker</h1>
            <hr />
            <BugStats bugs={bugs} />
            <BugEdit addNew={addNew} />
            <BugList {...{bugs, toggle, remove, removeClosed}} />
        </div>
    )
}
export default BugTracker;