import { useState, useEffect } from 'react'
import './App.css'
import { v4 } from "uuid"

function App() {
  const [ shopCards, setShopCards ]  = useState([
    {
      id: "10",
      title: "Миксер",
      price: 120,
    },
    {
      id: "20",
      title: "Телевизор",
      price: 300,
    },
    {
      id: "30",
      title: "Флешка",
      price: 50,
    },
    {
      id: "40",
      title: "Ручка",
      price: 20,
    }
  ])

  function addNewCard() {
    setShopCards([
      ...shopCards,
      {
        id: v4(),
        title: "Новая карточка",
        price: 0,
      }
    ])
  }

  return (
    <>
      <div className='container'>
        { shopCards.map((card) => (<div className='card'>
          <h3>{ card.title }</h3>
          <p>Цена: { card.price }</p>
        </div>))
        }
      </div>
      <div>
        <button onClick={addNewCard}>Добавить</button>
      </div>
    </>
  )
}

export default App

// Практика 1:
//  У нас есть сайт со списком картинок из которых 
//  показана лишь одна, все картинки лежат в списке
//  и текущую для показа надо переключать кнопками 
//  "Предыдущая" и "Следующая" 

