import { useParams } from "react-router-dom"

function UserInfo() {
    const params = useParams()

    return (
        <div>ID: {params.id}</div>
    )
}
export default UserInfo