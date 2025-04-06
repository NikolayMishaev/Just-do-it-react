import './ThemePanel.css'
import { changeThemeStore } from '../../store/appSettingsSlice'
import { useDispatch } from 'react-redux'
import { updateAppSettingsServer } from '../../utils/AppSettingsAPI'

function ThemePanel() {

    const dispatch = useDispatch()

    function handleChangeTheme (theme) {
        updateAppSettingsServer({theme}).then(response => {
            if (response) dispatch(changeThemeStore(response.theme))
        })
    }
    
    return (
        <nav className="theme-panel">
            <button className="task-manager__button task-manager__button_theme_grey" onClick={() => handleChangeTheme('grey')}></button>
            <button className="task-manager__button task-manager__button_theme_white" onClick={() => handleChangeTheme('white')}></button>
            <button className="task-manager__button task-manager__button_theme_black" onClick={() => handleChangeTheme('black')}></button>
        </nav>
    )
}

export default ThemePanel