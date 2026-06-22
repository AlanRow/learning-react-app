import { useState, useEffect, useRef, useReducer } from 'react'
import './App.css'
import Stopwatch from "./components/Stopwatch"
import ToggleButton from './components/ToggleButton';


const defaultSecuritySettings = [
  {
    key: "oauth",
    name: "OAuth",
    enabled: true
  },
  {
    key: "2fa",
    name: "2FA",
    enabled: false
  },
  {
    key: "password",
    name: "Пароль",
    enabled: false
  },
  {
    key: "sms",
    name: "SMS-код",
    enabled: false
  },
]

function checkboxesReducer(state, action) {
  if (action.type === "toggle") {
    return state.map(
        (setting) => setting.key === action.payload ? 
          { ...setting, enabled: !setting.enabled } :
          setting
      )
  }
}

function App() {
  const [ securitySettings, dispatchSettings ] = useReducer(
    checkboxesReducer,
    defaultSecuritySettings
  )

  function toggleCheckbox(key) {
    dispatchSettings({ type: "toggle", payload: key })
  }

  return (
    <>
    <div>
      { securitySettings.map((setting) => (
        <label key={setting.key}>
          { setting.name }
          <input
            type="checkbox"
            checked={setting.enabled}
            onChange={() => toggleCheckbox(setting.key)}
          />
        </label>
      )) } 
    </div>
    </>
  )
}

export default App

// Практика 1: Числа Фиббоначчи
// Напишите сайт, который выводит список чисел Фиббоначчи
// Изначально их всего 2
// Есть две кнопки: "Добавить новое" и "Удалить последнее"
// Реализуйте их при помощи useReducer
//  1, 1, 2, 3, 5, 8





