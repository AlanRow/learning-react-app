import { useState, useEffect, useRef } from 'react'
import './App.css'
import Stopwatch from "./components/Stopwatch"
import ToggleButton from './components/ToggleButton';

function App() {
  const [filterName, setFilterName] = useState("");

  const [flag, setFlag] = useState(true)

  const allFilms = [
    "451 по Фаренгейту",
    "Игра Престолов",
    "Игра Эндера",
    "Властелин Колец"
  ]

  function getFilteredFilms(films, name) {
    console.log("Filtering...")
    return films.filter((f) => f.includes(name))
  }

  // Вариант 1
  const filteredFilms = getFilteredFilms(allFilms, filterName)

  // Вариант 2, имеет смысл если getFilteredFilms, это обращение к АПИ
  // const [filteredFilms, setFilteredFilms] = useState([])

  // useEffect(() => {
  //   setFilteredFilms(getFilteredFilms(allFilms, filterName))
  // }, [filterName])

  return (
    <>
    <div>
      <form>
        <div>
          <input
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
            />
        </div>
      </form>

      <button onClick={() => setFlag(!flag)}>{ flag ? "On" : "Off" }</button>

      <ul>
        { filteredFilms.map((film) => <li key={film}>{film}</li>)}
      </ul>
    </div>
    </>
  )
}

export default App

// Практика 1:
// Создайте веб-страницу, которая содержит
// список настроек безопасности профиля пользователя
// (использовать OAuth, использовать пароль,
// 2FA использовать, SMS код)
// Настройки должны хранится в виде списка объектов
//  с тремя свойствами:
//    enabled (boolean),
//    name (string),
//    key (string)

// При отрисовке они должны рисоваться как чекбоксы
// с подписями, весь список ххранится как одна
// реактивная перменная





