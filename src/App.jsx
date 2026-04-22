import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [state, setState] = useState({
    age: 32,
    name: "John",
  })

  function updateAge(newAge) {
      setState({
        age: newAge,
        name: state.name
      })
      // state.age = newAge // не можем!
  }

  const [age, setAge] = useState(state.age)


  function handleInput(event) {
    setAge(+event.target.value)
  }

  function handleClick(event) {
    updateAge(age);
  }

  return (
    <div>
      <h3>{ state.name }</h3>
      <p>{ state.age }</p>
        <input value={age} onInput={handleInput}></input>
      <button onClick={handleClick}>Update age</button>
      <div>
        <input type="checkbox"></input>
        <span>Выкл</span>
      </div>
    </div>
  )
}

export default App




// Практика 1:
//   Карточку в корзине товаров, в ней должны быть поля
//   - название товара
//   - стоимость товара
//   - кол-во товаров для добавления (числовой инпут)

// Практика 1.2
//   Добавьте в карточку:
//   - поле текущее количество (не инпут)
//   - кнопку "Добавить"
//   При нажатии на кнопку число в инпуте добавляется к
//   текущему количеству

// Практика 2:
// Создать радио-переключатель, который
//  меняя сотояние изменяет подпись "вкл" / "выкл"
// Используйте обработчик onChange
