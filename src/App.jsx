import { useState, useEffect, useRef, useReducer } from 'react'
import './App.css'
import ThemeForm from './components/ThemeForm copy'
import { THEME_MODE } from './const'

function App() {
  const [ theme, setTheme ] = useState(THEME_MODE.LIGHT)

  function toggleTheme() {
    if (theme === THEME_MODE.LIGHT) {
      setTheme(THEME_MODE.DARK)
    } else {
      setTheme(THEME_MODE.LIGHT)
    }
  }

  return (
    <>
    <button onClick={toggleTheme}>{ theme }</button>
    <div>
      <ThemeForm theme={theme} />
    </div>
    </>
  )
}

export default App






