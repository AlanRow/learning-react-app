import { useState, useEffect } from 'react'
import './App.css'

import calc, { plus, minus } from "./utils/calc"
import AlertButton from './components/AlertButton';

function App() {
  const a = 10;
  const b = 15;
  return (
    <>
      <div>
        <AlertButton text="Imported"></AlertButton>
      </div>
      <h1>{ plus(a, b) }</h1>
      <h1>{ minus(a, b) }</h1>
      <h1>{ calc.plus(a, b) }</h1>
      <h1>{ calc.minus(a, b) }</h1>
    </>
  )
}

export default App

// Практика 1:
// Напишите приложение калькулятор, которое принимает
// два числа в инпуты и возводит первое в степень 
// второго при клеке на кнопку "="
// Примечание: все функции, кроме компонентов
//  должны импортироваться из файла /utils/calc.js



