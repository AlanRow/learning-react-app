import { useState, useEffect, useRef } from "react"

function Stopwatch(props) {
    const [timer, setTimer] = useState(0);

    const intervalId = useRef(null)
    const previousTimer = useRef(null)

    useEffect(() => {
        // Код выполняется при монтировании
        // потому что в зависимостях пусто ([])
        previousTimer.current = timer
        intervalId.current = setInterval(function() {
            setTimer(previousTimer.current + 1);
            previousTimer.current = timer
        }, 1000)
    }, [])

    // Вызовется при обновлении maxTime
    useEffect(() => {
        setTimer(0)
    }, [props.maxTime])

    return (<span>{timer}</span>)
}

export default Stopwatch