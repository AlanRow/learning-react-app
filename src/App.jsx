import { useState, useMemo } from 'react'
import './App.css'


function sum(x, y) {
  console.log("Summarize...")
  return x + y
}

function App() {
  const [ toggle, setToggle ] = useState(true)

  const [a, setA] = useState(1)
  const [b, setB] = useState(1) 

  const abSum = useMemo(
    () => sum(a, b),
    [a, b]
  )

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








