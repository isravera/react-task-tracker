import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {

    const date = new Date(task.day)
    const dateFormat = date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    })

    return(

        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} <FaTimes style={{ color: 'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)}/></h3>
            <p>{dateFormat.replace(',', ' at')}</p>
        </div>
    )
}

export default Task