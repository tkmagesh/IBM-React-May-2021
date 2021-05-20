import { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import projectActionCreators from './actions';

const ProjectStats = (props) => {
    return (
        <div>
            <span>Count : {props.data.length}</span>
        </div>
    )
};

const Projects = (props) => {
    //const { newProjectName } = this.state;
    const [newProjectName, setNewProjectName] = useState('');
    const { projects, addNew, remove } = props;
    const projectItems = projects.map((projectName, idx) => (
        <li key={idx}>
            <span>{projectName}</span>
            <input type="button" value=" X " onClick={() => remove(projectName)} />
        </li>)
    )
    return (
        <div>
            <h1>Projects</h1>
            <hr />
            <label>Product Name : </label>
            <input type="text" value={newProjectName} onChange={evt => setNewProjectName(evt.target.value) } />
            <input type="button" value="Add New" onClick={_ => addNew(newProjectName)} />
            <ol>
                {projectItems}
            </ol>
        </div>
    )
    }
/* class ProjectStats extends React.Component {
    render() {
        return (
            <div>
                <span>Count : {this.props.data.length}</span>
            </div>
        )
    }
} */

function mapStateToProps(storeState){
    return { projects : storeState.projectsState };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(projectActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
