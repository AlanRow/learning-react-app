import { useState, useEffect } from "react"

function MetaTitleInput() {
    const [title, setTitle] = useState("")

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    useEffect(() => {
        if (title !== "") {
            document.title = title
        }
    }, [title])

    return (
        <input onChange={handleChange}></input>
    )
}

export default MetaTitleInput