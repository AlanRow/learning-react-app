import { useState, useMemo, useEffect, useCallback } from 'react'
import './App.css'

function helloWorld() {
  console.log("Hello, World!")
}

function App() {
  const [ toggle, setToggle ] = useState(true)

  const [a, setA] = useState(1)
  const [b, setB] = useState(1)

  const getSum = useCallback(() => {
    console.log("Sum calculating...")
    return a + b
  }, [a, b])

  useEffect(() => {
    console.log("Sum function changed")
  }, [getSum])

  useEffect(() => {
    console.log("Hello function changed")
  }, [helloWorld])

  const abSum = useMemo(() => getSum(), [a, b])

  return (
    <>
    <div>
      <button onClick={() => setToggle(!toggle)}>
        { toggle ? "Вкл." : "Выкл." }
      </button>

      <div>
        <input value={a} onChange={(e) => setA(Number(e.target.value))} />
        +
        <input value={b} onChange={(e) => setB(Number(e.target.value))} />
        =
        <span>{ abSum }</span>
      </div>
    </div>
    </>
  )
}

export default App

// Практика 1
//  Создайте с помощью useCallback функцию helloUser, 
//  которая выводит alert "Hello, {user}!" и обновляется 
//  только при изменении имени пользователя
//  Доп. задание: добавьте инпут, который позволит вводить 
//  и изменять имя пользователя 






