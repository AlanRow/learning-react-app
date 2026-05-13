import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// Prettier

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

  const cardClasses = [
    "card",
    cost === 0 && "free"
  ].filter(cls => Boolean(cls));

  return (
    <>
      <div className={cardClasses.join(' ')} style={{
        backgroundColor: cost > 0 ? "white" : "green"
      }}>
        <h2>{name}</h2>
        <p>{priceSpan}</p>
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

// Практика 1:
//  В переменной задана стоимость
//  покупки акции и текущая стоимость
//  (startPrice, currentPrice)
//  
//  В интерфейсе необходимо вывести
//  Текущую стоимость
//  и разницу с припиской "Прибыль" / "Убыток"
//  в зависимости от того, больше или меньше она нуля

// Практика 2:
//  В предыдущей практике, если получен убыток, 
//  то текст выделяется красным,
//  если прибыль - зеленым
//  (реализовать через условные классы)
//  
//  Шрифт текста 2rem, 
//  если абсолютная разница больше 100
//  реализовать чсерез style