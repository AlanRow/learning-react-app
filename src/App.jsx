import { useState, memo } from 'react'
import './App.css'
import List from './components/List'

const MemoizedList = memo(List)

function App() {
  const [ toggle, setToggle ] = useState(true)
  const [length, setLength] = useState(1)

  return (
    <>
    <div>
      <button onClick={() => setToggle(!toggle)}>
        { toggle ? "Вкл." : "Выкл." }
      </button>
      <MemoizedList length={length} />
      <button onClick={() => setLength(length - 1)}>
        -
      </button>
      <button onClick={() => setLength(length + 1)}>
        +
      </button>
    </div>
    </>
  )
}

export default App

// Практика 1:
//  Добавьте компонент Button, с параметром text 
//  в его props
//  Вставьте в App.jsx мемоизированный компонент 
//  MemoizedButton
//  Добавьте в компонент Button console.log
//  или alert, который будем вызываться при каждом
//  рендере








