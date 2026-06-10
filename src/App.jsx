import { useState, useEffect } from 'react'
import './App.css'

import pow from "./utils/calc"
import AlertButton from './components/AlertButton';

function App() {
  const [a, setA] = useState(1)
  const [b, setB] = useState(0)
  const [res, setRes] = useState(pow(a, b))

  function updateRes() {
    setRes(pow(a, b))
  }

  return (
    <>
      <div>
        <input value={a} onChange={(e) => setA(e.target.value)} />
        <span>^</span>
        <input value={b} onChange={(e) => setB(e.target.value)} />
        <button onClick={updateRes}>=</button>
        <span>{res}</span>
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



