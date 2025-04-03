import './Task.css'

function Task() {
    
    return (
        <li className="task-manager__task">
            <p className="task-manager__task-text"></p>
            <button className="task-manager__button task-manager__button_task_complete"></button>
            <button className="task-manager__button task-manager__button_task_delete"></button>
        </li>
    )
}

export default Task