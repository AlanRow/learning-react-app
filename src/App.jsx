import { useState, useEffect } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import AuthForm from './components/AuthForm'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={ 
              <div>
                <h1> Welcome! </h1>
                <Link to="/auth">Login</Link>
              </div>
            } />
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


