import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// Prettier

function App() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      message: "Hello, everyone!",
      author: "Jamey",
      removed: false,
    },
    {
      id: 2,
      message: "Hello, Jamey",
      author: "Sam",
      removed: true,
    },
    {
      id: 3,
      message: "How are you?",
      author: "Jamey",
      removed: false,
    },
  ])

  // const message = "Hello, everyone!"
  // const author = "Jamey"

  const messagesList = messages.filter(m => !m.removed).map((m, i) => (
    <div key={i} className="card">
      <div>{m.message}</div>
      <div className="author">{m.author}</div>
    </div>
  ))

  function addMessage() {
    const newMessages = [...messages, {
      id: messages.length + 1,
      message: "New message",
      author: "Kolin",
      removed: false,
    }]
    // НЕ РАБОТАЕТ
    // messages.push({
    //   id: messages.length + 1,
    //   message: "New message",
    //   author: "Kolin",
    //   removed: false,
    // })
    setMessages(messages)
  }
  return (
    <>
      <div className='container'>
        {messagesList}
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
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

// Практика 1, вариант 1:
// Вывести список на 15 пунктов футбольных команд в 
// чемпионате мира со следующими параметрами:
//  - место
//  - страна
//  - число побед

// Практика 1, вариант 2:
// Вывести список машин в автосалоне:
//  - марка
//  - цвет
//  - мощность двигателя
//  - стоимость