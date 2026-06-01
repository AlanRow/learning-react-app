import { useState, useEffect } from "react"

function Stopwatch() {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log(timer)
            setTimer(timer => timer + 1)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (<span>{timer}</span>)
}

export default Stopwatch