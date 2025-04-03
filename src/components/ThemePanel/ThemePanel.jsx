import './ThemePanel.css'

function ThemePanel() {

    const handleClick = (e) => console.log(e.target)

    return (
        <nav className="theme-panel">
            <button className="task-manager__button task-manager__button_theme_grey" onClick={handleClick}></button>
            <button className="task-manager__button task-manager__button_theme_white"></button>
            <button className="task-manager__button task-manager__button_theme_black"></button>
        </nav>
    )
}

export default ThemePanel