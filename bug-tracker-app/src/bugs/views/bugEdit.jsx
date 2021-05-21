import { useState } from 'react';

const BugEdit = ({addNew, projects }) => {
    const [newBugName, setNewBugName] = useState('');
    return (
        <section className="edit">
            <label htmlFor="">Bug Name :</label>
            <input type="text" onChange={evt => setNewBugName(evt.target.value)} />
            <label htmlFor="Project : "></label>
            <select >
                <option value="">---Choose a project----</option>
                { projects.map(project => (<option key={project.id} value={project.id}>{project.name}</option>))}
            </select>
            <input
                type="button"
                value="Add New"
                onClick={_ => addNew(newBugName)}
            />
        </section>
    )
}
export default BugEdit;