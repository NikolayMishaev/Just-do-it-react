import './ThemePanel.css'
import { changeTheme } from '../../store/appSettingsSlice'
import { useDispatch } from 'react-redux'

function ThemePanel() {

    
    const dispatch = useDispatch()
    const handleClick = (theme) => dispatch(changeTheme(theme))
    
    return (
        <nav className="theme-panel">
            <button className="task-manager__button task-manager__button_theme_grey" onClick={() => handleClick('grey')}></button>
            <button className="task-manager__button task-manager__button_theme_white" onClick={() => handleClick('white')}></button>
            <button className="task-manager__button task-manager__button_theme_black" onClick={() => handleClick('black')}></button>
        </nav>
    )
}

export default ThemePanel