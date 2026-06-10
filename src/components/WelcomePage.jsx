import { useSearchParams, Link } from "react-router-dom"

function WelcomePage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const name = searchParams.get("name")

    return (
        <div>
        <h1> { name ? `Welcome, ${name}!` : `Welcome!` } </h1>
        { !name && <Link to="/auth">Login</Link> }
        </div>
    )
}
export default WelcomePage