import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import UserCard from './components/UserCard'
import UserCardEditable from './components/UserCardEditable'

function App() {
  const [ isEditing, setEditing ] = useState(false)
  const [ isChanged, setChanged ] = useState(false)
  const [ isFirstRender, setFirstRender ] = useState(true)

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

  useEffect(() => {
    console.log("User data changed: ", new Date(Date.now()))
    console.log(JSON.stringify(user, null, 4));

    if (isFirstRender) {
      setFirstRender(false)
    } else {
      setChanged(true)
    }
  }, [user])

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
      { isChanged && (
        <button onClick={() => setChanged(false)}>
          Сохранить
        </button> )
      }
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

// Практика 2: хватит шопинга!
// У пользователя есть кнопка купить и он очень любит ее нажимать
// Его не останавливает даже то, что средства у него закончились
// Добавьте на страницу следующие элементы:
//   -- текущий баланс
//  -- кнопку "Купить", которая уменьшает баланс на 100
//  -- alert оповещение если баланс пользователя опустился ниже нуля
//     (но только один раз, дальше - его проблемы)