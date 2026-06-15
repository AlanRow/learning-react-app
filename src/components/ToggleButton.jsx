import { useState, useRef } from "react"

const ON_TEXT = "Выкл."
const OFF_TEXT = "Вкл."

function ToggleButton() {
    const [ isOn, setOn ] = useState(false)
    const clicksCounter = useRef(0)

    function toggle() {
        setOn(!isOn)
        clicksCounter.current += 1
        console.log(clicksCounter.current)
    }

    const buttonText = isOn ? ON_TEXT : OFF_TEXT

    return (
        <button onClick={toggle}>{ buttonText }</button>
    )
}

export default ToggleButton