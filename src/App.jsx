import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


  // Если возраст в диапазоне 11-19, то "лет"
  // Если не пред. и возраст кончается на 1, то это "год"
  // Если не пред. и кончается на 2-4, то "года"
  // Если не пред. и кончается на 5-9 или 0, то "лет"
  function getAgeWord(age) {
    const lastAgeDigit = age % 10;
    const lastTwoDigits = age % 100;

    if (lastTwoDigits > 10 && lastTwoDigits < 20) return "лет";

    if (lastAgeDigit === 1) return "год"
    if (lastAgeDigit > 1 && lastAgeDigit < 5) return "года"
    
    return "лет"
  }

function App() {
  const [state, setState] = useState({
    age: 20,
    name: "Джон",
  })
  

  let ageWord = getAgeWord(state.age);

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

  const wrapperStyles = {
    padding: "16px",
    border: "1px solid black",
    borderRadius: "12px",
    "background-color":"#bababa"
  }

  return (
    <>
      <div style={wrapperStyles}>
        <h3 className="title-text">{ state.name } ({ state.age } {ageWord})</h3>
          {  state.age > 18 ? (<p>Пользователь совершеннолетний</p>) : "" }
          <input value={age} onInput={handleInput}></input>
        <button onClick={handleClick}>Update age</button>
      </div>
      {/* <form style={{
        padding: "16px",
        border: "1px solid black",
        backgroundColor: "#8e9674"
      }}>
        <div>
          <label style={labelStyles}>E-mail: </label>
          <input style={inputStyles}></input>
        </div>
        <div>
          <label style={labelStyles}>Password: </label>
          <input style={inputStyles}></input>
        </div>
        <button className="submit-btn">Submit</button>
      </form> */}
    </>
  )
}

export default App

// Практика 1: Добавить форму с 2 полями: почта и пароль + кнопка
//  Стилизовать их: форме добавить отступы (padding), 
//    границу и цвет фона (через стили)
//    
//  Для полей добавить ширину на всю форму (через стили в переменной)
//  Для кнопки: цвет фона, скругление и подсветку при наведении
//    (через классы)




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
