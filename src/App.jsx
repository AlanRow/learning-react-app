import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// Prettier

function App() {
  const messages = [
    "Hello, everyone!",
    "Hello, Jamey",
    "How are you?",
    "I'm fine",
    "London is the capital of Great Britain"
  ]
  // const message = "Hello, everyone!"
  // const author = "Jamey"

  const messagesList = messages.map(m => (
    <div className="card">
      <div>{m}</div>
    </div>
  ))

  return (
    <>
      <div>
        {messagesList}
      </div>

      {/* <div className="card">
        <div>{message}</div>
        <div className="author">{author}</div>
      </div> */}

      { /** КАК НЕ НАДО ДЕЛАТЬ! */}
      {/* <div>
        <div className="card">
          <div>{messages[0]}</div>
        </div>
        <div className="card">
          <div>{messages[1]}</div>
        </div>
        <div className="card">
          <div>{messages[2]}</div>
        </div>
        <div className="card">
          <div>{messages[3]}</div>
        </div>
        <div className="card">
          <div>{messages[4]}</div>
        </div>
      </div> */}
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
//  Шрифт текста (font-size) 2rem, 
//  если абсолютная разница больше 100
//  реализовать чсерез style