import { useState, useEffect, useRef } from 'react'
import './App.css'
import Stopwatch from "./components/Stopwatch"



function App() {
  let counter1 = 0;

  function upCounter1() {
    counter1 += 1;
  }

  const [ counter2, setCounter2 ] = useState(0)
  function upCounter2() {
    setCounter2(counter2 + 1)
  }

  let counter3 = useRef(0)
  function upCounter3() {
    counter3.current += 1
  }

  return (
    <>
      <div>
        <p>Counter 1: {counter1}</p>
        <button onClick={upCounter1}>Up</button>
      </div>
      <div>
        <p>Counter 2: {counter2}</p>
        <button onClick={upCounter2}>Up</button>
      </div>
      <div>
        <p>Counter 3: {counter3.current}</p>
        <button onClick={upCounter3}>Up</button>
      </div>
    </>
  )
}

export default App

// Практика 1:
// Напишите компонент, ToggleButton
//  Это кнопка, которая имеет сотояния "Вкл" и "Выкл"
// Состояние меняется при каждом клике
// Помимо этого при каждом клике в консоль должно выводиться
//  Текущее число кликов (используйте useRef)



