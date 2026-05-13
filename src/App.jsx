import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// Prettier

const styles = {
  display: 'flex',
  flexDirection: "column",
  width: "fit-content",
  margin: "2rem auto",
  padding: '24px',
  border: '1px solid black'
}

function App() {
  const name = "Кеды";
  const [cost, setCost] = useState(1500);
  
  let priceSpan;

  if (cost > 0) {
    priceSpan = (<span>{cost} ₽</span>)
  } else {
    priceSpan = (<span>Бесплатновое</span>)
  }

  function makeFree() {
    setCost(0);
  }

  return (
    <>
      <div style={styles}>
        <h2>{name}</h2>
        <p>{priceSpan}</p>
        <p>{ cost > 0 ? `${cost} ₽`: "Бесплатновое" }</p>
        { cost > 0 &&
          (<button onClick={makeFree}>
            Сделать коммунизм
          </button>)
        }
      </div>
    </>
  )
}

export default App