import { useState, useEffect, useRef } from 'react'
import './App.css'
import Stopwatch from "./components/Stopwatch"
import ToggleButton from './components/ToggleButton';

function App() {
  return (
    <>
    <div>
      <ToggleButton />
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



