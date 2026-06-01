import { useState, useEffect } from 'react'
import './App.css'

import AlertButton from './components/AlertButton'
import Stopwatch from './components/Stopwatch'

function App() {
  const [hasTimer, setHasTimer] = useState(true)

  function toggleTimer() {
    setHasTimer(!hasTimer)
  }

  return (
    <>
      <button onClick={toggleTimer}>
        { hasTimer ? 'Hide' : 'Show' } таймер
        </button>
      { hasTimer && <Stopwatch /> }
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
