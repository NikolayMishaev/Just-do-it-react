import './Task.css'
import { deleteTask } from '../../utils/TasksAPI'
import { useDispatch } from 'react-redux'
import { deleteTaskStore } from '../../store/tasksSlice'

function Task({text, isComplete, id}) {
    
    const dispatch = useDispatch()

    function handleCompleteTask() {
        
    }

    function handleDeleteTask() {
        deleteTask(id).then (response => {
            if (response) {
                dispatch(deleteTaskStore(response.id))
            }
        })
    }

    return (
        <li className={`task-manager__task task-manager__task_${isComplete? 'complete' : ''}`}>
            <p className="task-manager__task-text">{text}</p>
            <button className="task-manager__button task-manager__button_task_complete" onClick={handleCompleteTask}></button>
            <button className="task-manager__button task-manager__button_task_delete" onClick={handleDeleteTask}></button>
        </li>
    )
}

export default Task