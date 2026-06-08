import { useState, useEffect } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route  } from "react-router-dom"
import AuthForm from './components/AuthForm'
import WelcomePage from './components/WelcomePage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={ <WelcomePage /> } />
            <Route path="/auth" element={ <AuthForm /> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

// Практика 1:
//  Надо написать страницу сайта цветочного магазина
//  (или любой другой сайт) с хедером, в котором
//  находятся две вкладки:
//  1) основная страница с описанием сайта (/)
//  2) страница с контактами (телефон и почта) (/contacts)
// 
//  Для ссылок в хедере используйте Link

// Практика 2: Промокоды
// По адресу / лежит страница с двумя рекламными ссылками на товар
// Первая дает промокод на скидку в 100 рублей, 
// а вторая - на кэшбек в 150
//  При клике на любую из ссылок мы переходим 
// по адресу /buy?code={промокод}
// Там надодится итоговая стоимость и
// прмокод: если его нету, то и блока с
//  кодом тоже нету 



