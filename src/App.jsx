import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import MessageCard from './components/MessageCard'

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

  function addMessage() {
    setMessages((lastMessages) => [...lastMessages, {
      id: messages.length + 1,
      message: "New message",
      author: "Kolin",
      removed: false,
    }])
  }
  return (
    <>
      <div className='container'>
        <MessageCard message="Hello"></MessageCard>
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </>
  )
}

export default App

// Практика 1
// Создать страницу со списком задач, где можно
// - добавлять новую задачу (с названием "Задача #N")
// - удалять существующую задачу, кликнув по кнопке на ней