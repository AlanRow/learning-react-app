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
// Напишите компонент, ToggleButton
//  Это кнопка, которая имеет сотояния "Вкл" и "Выкл"
// Состояние меняется при каждом клике
// Помимо этого при каждом клике в консоль должно выводиться
//  Текущее число кликов (используйте useRef)

// Практика 2:
//  Напишите программу, которая рисует прямоугольник
//  с высотой 50% и шириной 50% экрана (через CSS)
//  И добавбье кнопку при клике на которую
//  В алерте будет выводиться ширина и высота
//  прямоугольника в пикселях

// Используйте любые свойства ширины и высоты
// (e. g. offsetWidth / offsetHeight)



