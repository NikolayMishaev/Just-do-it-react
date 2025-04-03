import './App.css'
import '../ThemePanel/ThemePanel'
import ThemePanel from '../ThemePanel/ThemePanel'
import { useSelector } from 'react-redux'

function App() {

    const theme = useSelector(state => state.appSettings.theme)

  return (
    <div className={`body body_theme_${theme}`}>
        <div className="task-manager">
            <ThemePanel/>
            <h1 className = 'task-manager__title'>Just do it.<div className="task-manager__line"></div></h1>
            <div className="task-manager__input-panel">
                <input className="task-manager__input" placeholder="Add a task."></input>
                <button className="task-manager__button task-manager__button_task_add">I Got This!</button>
            </div>
            <p className="task-manager__date">You don't have a single task.</p>
            <ul className="task-manager__container-tasks">
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
