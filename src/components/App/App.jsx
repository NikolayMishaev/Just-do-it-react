import './App.css'
import '../ThemePanel/ThemePanel'
import ThemePanel from '../ThemePanel/ThemePanel'
import Task from '../Task/Task'
import { useSelector, useDispatch } from 'react-redux'
import { addTask } from '../../store/tasksSlice'
import { setPage, setCountPage, incrementId, setId, changeTheme } from '../../store/appSettingsSlice'
import { getDate } from '../../utils/utils'
import { MESSAGES } from '../../utils/constants'
import { useState, useEffect } from 'react'
import { getTasks, postTask } from '../../utils/TasksAPI'
import { getAppSettings, patchAppSettings } from '../../utils/AppSettingsAPI'

function App() {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch()
    const theme = useSelector(state => state.appSettings.theme)
    const id = useSelector(state => state.appSettings.id)
    const tasks = useSelector(state => state.tasks.tasks)

    function handleChangeTask (e) {
        setInputValue(e.target.value)
    }
 
    function handleAddTask() {
        if (!inputValue) return;
        const { currentDate, dateInSeconds } = getDate();
        const newTask = {
            text: inputValue,
            date: currentDate,
            dateInSeconds,
            isComplete: false,
            id: id,
        };

        postTask(newTask)
            .then((task) => {
                if (task) {
                    dispatch(addTask(newTask))
                }
            })
            .catch((error) => console.log(error))

        patchAppSettings({appID : id + 1}).then(res => {
            if (res) dispatch(incrementId());
        }).catch((error) => console.log(error));
    }

    const viewTasks = tasks.map(task =>
        <Task key={task.id} {...task}/>
    );

    useEffect(() => {
        getAppSettings().then(appSettings => {
            if (appSettings) {
                const {theme, page, countTasksOnPage, appID} = appSettings[0]
                dispatch(changeTheme(theme))
                dispatch(setId(appID))
                dispatch(setPage(page))
                dispatch(setCountPage(countTasksOnPage))
            }
        }).catch(error => console.log(error))
        getTasks().then(tasks => {
            if (Array.isArray(tasks)) tasks.map(task => dispatch(addTask(task)))
        }).catch(error => console.log(error))
      }, []);



  return (
    <div className={`body body_theme_${theme}`}>
        <div className="task-manager">
            <ThemePanel/>
            <h1 className = 'task-manager__title'>Just do it.<div className="task-manager__line"></div></h1>
            <div className="task-manager__input-panel">
                <input className="task-manager__input" placeholder="Add a task." value={inputValue} onChange={handleChangeTask}></input>
                <button className="task-manager__button task-manager__button_task_add" onClick={handleAddTask}>I Got This!</button>
            </div>
            <p className="task-manager__date">{MESSAGES.emptyContainerTasks}</p>
            <ul className="task-manager__container-tasks">
                {viewTasks}
            </ul>
            <div className="task-manager__pagination-panel display-none">
                <button className="task-manager__button task-manager__button_pagination_prev">prev page</button>
                <div className="task-manager__page"></div>
                <button className="task-manager__button task-manager__button_pagination_next">next page</button>
            </div>
        </div>
    </div>
  )
}

export default App
