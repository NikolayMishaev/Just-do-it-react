import './Task.css'
import { deleteTaskServer, updateTaskServer } from '../../utils/TasksAPI'
import { useDispatch } from 'react-redux'
import { deleteTaskStore, updateTaskStore } from '../../store/tasksSlice'

function Task({text, isComplete, id}) {
    
    const dispatch = useDispatch()

    function handleCompleteTask() {
        updateTaskServer(id, {isComplete: !isComplete}).then (response => {
            if (response) {
                dispatch(updateTaskStore({id: response.id, isComplete: response.isComplete}))
            }
        }).catch(error => console.log(error))
    }

    function handleDeleteTask() {
        deleteTaskServer(id).then (response => {
            if (response) {
                dispatch(deleteTaskStore(response.id))
            }
        }).catch(error => console.log(error))
    }

    return (
        <li className={`task-manager__task task-manager__task_${isComplete ? 'complete' : ''}`}>
            <p className="task-manager__task-text">{text}</p>
            <button className="task-manager__button task-manager__button_task_complete" onClick={handleCompleteTask}></button>
            <button className="task-manager__button task-manager__button_task_delete" onClick={handleDeleteTask}></button>
        </li>
    )
}

export default Task