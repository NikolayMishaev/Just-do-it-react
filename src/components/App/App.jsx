import './App.css'
import '../ThemePanel/ThemePanel'
import ThemePanel from '../ThemePanel/ThemePanel'
import Task from '../Task/Task'
import { useSelector, useDispatch } from 'react-redux'
import { addTaskStore } from '../../store/tasksSlice'
import { setPageStore, setCountPageStore, incrementIdStore, setIdStore, changeThemeStore } from '../../store/appSettingsSlice'
import { getDate ,sortByID, getLastDate } from '../../utils/utils'
import { MESSAGES } from '../../utils/constants'
import { useState, useEffect } from 'react'
import { getTasksServer, addTaskServer } from '../../utils/TasksAPI'
import { getAppSettingsServer, updateAppSettingsServer } from '../../utils/AppSettingsAPI'

function App() {

    const [inputValue, setInputValue] = useState("");
    const [dateLastTask, setDateLastTask] = useState(MESSAGES.taskListIsEmpty);
    const [visiblePaginationPanel, setVisiblePaginationPanel] = useState(false);
    const dispatch = useDispatch()
    const theme = useSelector(state => state.appSettings.theme)
    const id = useSelector(state => state.appSettings.id)
    const tasks = useSelector(state => state.tasks.tasks)
    const page = useSelector(state => state.appSettings.page)
    const countTasksOnPage = useSelector(state => state.appSettings.countTasksOnPage)

    function handleInputTask (e) {
        setInputValue(e.target.value)
    }
 
    function handleAddTask() {
        if (!inputValue) return
        const { currentDate, dateInSeconds } = getDate();
        const newTask = {
            text: inputValue,
            date: currentDate,
            dateInSeconds,
            isComplete: false,
            id: String(id),
        };
        updateAppSettingsServer({ appID: id + 1 }).then(response => {
            if (response) {
                dispatch(incrementIdStore())
                addTaskServer(newTask)
                .then((task) => {
                    if (task) {
                        dispatch(addTaskStore(task))
                    }
                })
            }
        }).catch((error) => console.log(error))
    }

    const viewTasks = sortByID(tasks).map(task =>
        <Task key={task.id} {...task}/>
    );

    useEffect(() => {
        getAppSettingsServer().then(appSettings => {
            if (appSettings) {
                const {theme, page, countTasksOnPage, appID} = appSettings[0]
                dispatch(changeThemeStore(theme))
                dispatch(setIdStore(appID))
                dispatch(setPageStore(page))
                dispatch(setCountPageStore(countTasksOnPage))
            }
        }).catch(error => console.log(error))
        getTasksServer().then(tasks => {
            if (Array.isArray(tasks)) tasks.map(task => dispatch(addTaskStore(task)))
        }).catch(error => console.log(error))
      }, []);

      useEffect(() => {
        // отобразить дату последней таски
        if (tasks.length > 0) setDateLastTask(getLastDate(tasks))
        else setDateLastTask(MESSAGES.taskListIsEmpty)
        // отобразить панель пагинации
        if (tasks.length < countTasksOnPage) {
            setVisiblePaginationPanel(false)
            updateAppSettingsServer({page: 1}).then(response => {
                if (response) dispatch(setPageStore(response.page))
            }).catch(error => console.log(error))
        } else setVisiblePaginationPanel(true)
      }, [tasks])

  return (
    <div className={`body body_theme_${theme}`}>
        <div className="task-manager">
            <ThemePanel/>
            <h1 className = 'task-manager__title'>Just do it.<div className="task-manager__line"></div></h1>
            <div className="task-manager__input-panel">
                <input className="task-manager__input" placeholder="Add a task." value={inputValue} onChange={handleInputTask}></input>
                <button className="task-manager__button task-manager__button_task_add" onClick={handleAddTask}>I Got This!</button>
            </div>
            <p className="task-manager__date">{dateLastTask}</p>
            <ul className="task-manager__container-tasks">
                {viewTasks}
            </ul>
            <div className={`task-manager__pagination-panel ${visiblePaginationPanel ? '' : 'display-none'}`}>
                <button className="task-manager__button task-manager__button_pagination_prev">prev page</button>
                <div className="task-manager__page">{page}</div>
                <button className="task-manager__button task-manager__button_pagination_next">next page</button>
            </div>
        </div>
    </div>
  )
}

export default App
