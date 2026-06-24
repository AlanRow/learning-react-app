import { useState, memo } from 'react'
import './App.css'
import List from './components/List'

const MemoizedList = memo(List)

function App() {
  const [ toggle, setToggle ] = useState(true)
  const [length, setLength] = useState(1)
  const [delimiter, setDelimiter] = useState(", ")

  return (
    <>
    <div>
      <button onClick={() => setToggle(!toggle)}>
        { toggle ? "Вкл." : "Выкл." }
      </button>
      <MemoizedList length={length} delimiter={delimiter} />
      <button onClick={() => setLength(length - 1)}>
        -
      </button>
      <button onClick={() => setLength(length + 1)}>
        +
      </button>
      <input
        value={delimiter}
        onChange={(e) => setDelimiter(e.target.value)}
      />
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

// Практика 2:
// Напишите компонент MultipliedResult, который
//  принимает три пропса: a, b и multyplyCharacter
//  Он должен выводить на экран строку вида:
//  "{a} {multiplyCharacter} {b} = {a * b}",
//  Например, при a = 2, b = 3 и 
//   multiplyCharacter = "X", Должно вывести строку
//  "2 X 3 = 6"

//  Добавьте компонент в App.jsx и привяжите a и b 
// к input'ам, a multiplyCharacter к селекту с двумя
//  вариантами: X и *








