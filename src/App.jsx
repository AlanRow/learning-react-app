import { useState, useEffect, useRef, useReducer, createContext } from 'react'
import './App.css'
import ThemeForm from './components/ThemeForm'
import { THEME_MODE } from './const'
import ThemeContext from './ThemeContext'

function App() {
  const [ theme, setTheme ] = useState(THEME_MODE.DARK)

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
      <ThemeContext value={theme}>
        <ThemeForm />
      </ThemeContext>
    </div>
    </>
  )
}

export default App

// Практика 1: разные валюты
// Вам нужно задать на сайте возможность переключать валюту
// (Р и $), при этом у вас есть компонент PriceSpan,
//  который выодит стоимость со знаком валюты в конце
// наприме: "100 Р" или "20$"
//  Напишите этот компонент и передайте туда знак,
// используя useContext и createContext







