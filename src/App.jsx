import { useState, useEffect, useRef } from 'react'
import './App.css'
import Stopwatch from "./components/Stopwatch"
import ToggleButton from './components/ToggleButton';

function App() {
  const inputRef = useRef(null)

  function focusInput() {
    inputRef.current.focus()
  }

  return (
    <>
    <div>
      <label onClick={focusInput}>Input: </label>
      <input ref={inputRef}></input>
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



