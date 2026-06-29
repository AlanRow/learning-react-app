import { useState, useMemo } from 'react'
import './App.css'


function sum(x, y) {
  console.log("Summarize...")
  return x + y
}

function sumMultiple(sumArr) {
  console.log("Summarize...")
  return sumArr.reduce((prev, cur) => prev + cur, 0)
}

// Option 1
// const SUM_VARS = [1, 1]

function App() {
  const [ toggle, setToggle ] = useState(true)

  // const [a, setA] = useState(1)
  // const [b, setB] = useState(1)

  // const abSum = useMemo(
  //   () => sum(a, b),
  //   [sumVars]
  // )

  // Option 2
  // const sumVars = useMemo(() => [a, b], [a, b])

  // Option 3
  const [sumVars, setSumVars] = useState([1, 1])
  const sumOfVars = useMemo(() => sumMultiple(sumVars), sumVars)

  function setArg(value, index) {
    setSumVars(sumVars.map((n, i) => i === index ? value : n))
  }

  return (
    <>
    <div>
      <button onClick={() => setToggle(!toggle)}>
        { toggle ? "Вкл." : "Выкл." }
      </button>

      {/* <div>
        <input value={a} onChange={(e) => setA(Number(e.target.value))} />
        +
        <input value={b} onChange={(e) => setB(Number(e.target.value))} />
        =
        <span>{ sum }</span>
      </div> */}
      <div>
        <input value={sumOfVars[0]} onChange={(e) => setArg(Number(e.target.value), 0)} />
        +
        <input value={sumOfVars[1]} onChange={(e) => setArg(Number(e.target.value), 1)} />
        =
        <span>{ sumOfVars }</span>
      </div>
    </div>
    </>
  )
}

export default App








