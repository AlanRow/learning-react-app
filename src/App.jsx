import { useState, useEffect } from 'react'
import './App.css'

import CatImage from "./assets/cat.jpg"

function App() {
  const [image, setImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0IQhVr9DDJCq61QX28zCoiqDrvezBh5ylw&s")

  return (
    <>
    <img width="100" src={CatImage} />
    </>
  )
}

export default App

// Практика 1:
//  У нас есть сайт со списком картинок из которых 
//  показана лишь одна, все картинки лежат в списке
//  и текущую для показа надо переключать кнопками 
//  "Предыдущая" и "Следующая" 

