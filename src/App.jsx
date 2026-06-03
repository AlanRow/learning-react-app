import { useState, useEffect } from 'react'
import './App.css'

import CatImage1 from "./assets/cat.jpg"
import CatImage2 from "./assets/cat2.jpg"

const IMAGES_LIST = [CatImage1, CatImage2]

function App() {
  const [ imageIndex, setImageIndex ] = useState(0)

  function nextImage() {
    setImageIndex((imageIndex + 1) % IMAGES_LIST.length);
  }

  function prevImage() {
    setImageIndex(imageIndex <= 0 ? 
      IMAGES_LIST.length - 1 : imageIndex - 1);
  }

  const image = IMAGES_LIST[imageIndex];

  return (
    <>
    <img width="100" height="100" src={image} />
    <div>
      <button onClick={prevImage}>Prev</button>
      <button onClick={nextImage}>Next</button>
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

