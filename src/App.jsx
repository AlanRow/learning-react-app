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

// Практика 2: Новый Счетчик
// Напишите стандартный счетчик с кнопками + и -
// Но используя useReducer (у вас будет два action.type):
//  1) "plus"
//  2) "minus"





