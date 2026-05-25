import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import UserCard from './components/UserCard'
import UserCardEditable from './components/UserCardEditable'

function App() {
  const [ isEditing, setEditing ] = useState(false)

  function toggleMode() {
    setEditing(!isEditing);
  }

  const data = {
    username: "Виктор",
    age: 23,
    isMale: true,
    bio: "Ничего интересного"
  }

  const [ user, setUser ] = useState(data);
  function changeUser(newUserData) {
    setUser({ ...user, ...newUserData })
  }

  const UserCardTemplate = isEditing ? 
    UserCardEditable :
    UserCard;

  return (
    <>
      <UserCardTemplate
        username={user.username}
        age={user.age}
        isMale={user.isMale}
        bio={user.bio}
        handleChange={changeUser}
      />

      <button onClick={toggleMode}>
        { isEditing ? 'Просмотр' : 'Редактирование' }
      </button>
    </>
  )
}

export default App

// Практика 1
// Создайте компонент UserCard, который принимает props:
// - username (ник)
// - age (возраст)
// - sex (пол)
// - bio (описание)
// И  отрисовывает данные 