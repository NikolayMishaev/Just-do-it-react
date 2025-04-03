import './ThemePanel.css'
import { decrement, increment, incrementByAmount } from '../../store/counterSlice'
import { useSelector, useDispatch } from 'react-redux'

function ThemePanel() {

    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    const handleClick = (e) => console.log(e.target)
    
    return (
        <nav className="theme-panel">
            <button className="task-manager__button task-manager__button_theme_grey" onClick={() => dispatch(increment())}></button>
            <button className="task-manager__button task-manager__button_theme_white"onClick={() => dispatch(decrement())}></button>
            <button className="task-manager__button task-manager__button_theme_black"onClick={() => dispatch(incrementByAmount(40))}></button>
            <p>counter: {count}</p>
        </nav>
    )
}

export default ThemePanel