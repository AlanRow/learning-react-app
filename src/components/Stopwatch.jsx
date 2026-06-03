import { useState, useEffect } from "react"

function Stopwatch(props) {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        // Код выполняется при монтировании
        // потому что в зависимостях пусто ([])
        const intervalId = setInterval(function() {
            setTimer(timer => timer < props.maxTime ? 
                timer + 1 :
                0
            )
        }, 1000)

        // эта функция вызовется при размонтировании
        // из-за return
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    // Вызовется при обновлении maxTime
    useEffect(() => {
        setTimer(0)
    }, [props.maxTime])

    return (<span>{timer}</span>)
}

export default Stopwatch