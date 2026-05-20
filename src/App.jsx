import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import MessageCard from './components/MessageCard'
import AddMessageButton from './components/AdddMessageButton'
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
        { messages.map(message => 
          (<MessageCard
              message={message.message}
              author={message.author} 
            />)
          ) }
        <div>
          <AddMessageButton handleClick={addMessage} />
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

// Практика 2
// Вынести элемент списка в отдельный компонент 
// с пропсами number и handleRemove