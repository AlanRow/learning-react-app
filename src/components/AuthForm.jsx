import { useState } from 'react'
import { useNavigate, createSearchParams } from 'react-router-dom'

function AuthForm() {
    const navigate = useNavigate()

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    function auth() {
        if (login === "Миша" && password === "123") {
            navigate({
                pathname: "/",
                search: "?" + createSearchParams({ name: login })
            })
        } else {
            alert("Неверные данные")
        }
    }

    return (<form>
       <div>
            <label>Login: </label>
            <input
                onChange={ 
                    (e) => setLogin(e.target.value)
                    }
            />
        </div> 
        <div>
            <label>Password: </label>
            <input
                type="password"
                onChange={ 
                    (e) => setPassword(e.target.value)
                    }
            />
        </div>
        <div>
            <button onClick={auth}>Login</button>
        </div>
    </form>)
}

export default AuthForm