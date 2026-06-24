function List({ length }) {
    console.log("List rendered")

    const list = [
        ...new Array(length)
    ].map((_, i) => i+1)

    return (<ul>
        {list.map(n => <li>{n}</li>)}
    </ul>)
}

export default List;