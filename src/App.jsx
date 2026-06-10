import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <>
      <div>
        <input ref={inputRef}></input>
      </div>
    </>
  )
}

export default App

// Практика 1:
// Напишите приложение калькулятор, которое принимает
// два числа в инпуты и возводит первое в степень 
// второго при клеке на кнопку "="
// Примечание: все функции, кроме компонентов
//  должны импортироваться из файла /utils/calc.js



