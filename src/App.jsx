import { useState, useEffect } from 'react'
import './App.css'

import AlertButton from './components/AlertButton'

function App() {
  const [text, setText] = useState("State 1") 

  const changeText = () => {
    setText(text + "1")
  }

  const setTextDefault = () => {
    setText("State 1")
  }

  return (
    <>
      <AlertButton
        text={text}
        handleClick={changeText}
      />

      <button onClick={setTextDefault}>Set Default</button>
    </>
  )
}

export default App

// Практика 1:
// Напишите компонент MetaTitleInput,
//  который содержит input напрямую связанный
//  с заголовком страницы, при изменении значения
//  в input меняется и заголовок страницы
//  (Пояснение: значение инпута поместите в useState
//   и примените к нему useEffect)
