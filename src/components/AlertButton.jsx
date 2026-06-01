import { useEffect, useState } from "react"

function AlertButton({ text, handleClick }) {
    useEffect(() => {
        alert(`Text has changed: ${text}`)
    }, [text])

    return (<button onClick={handleClick}>
        { text }
    </button>)
}

export default AlertButton