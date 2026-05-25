function UserCardEditable(props) {
    function changeUsername(event) {
        props.handleChange({ username: event.target.value })
    }

    function changeAge(event) {
        props.handleChange({
            age: Number(event.target.value)
        })
    }

    function setSex(isMale) {
        props.handleChange({
            isMale,
        })
    }

    function changeBio(event) {
        props.handleChange({
            bio: event.target.value
        })
    }

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        gap: '1rem'
    }}>
        <input value={props.username} onChange={changeUsername} />
        <input type="number" value={props.age} onChange={changeAge} />
        <div>
            <input checked={props.isMale} type="radio" value="male" onChange={() => setSex(true)}></input>
            <input checked={!props.isMale} type="radio" value="female" onChange={() => setSex(false)}></input>
        </div>
        <textarea value={props.bio} onChange={changeBio}></textarea>
    </div>
}

export default UserCardEditable;