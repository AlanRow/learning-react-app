function UserCard(props) {
    return <>
        <h2>{ props.username }</h2>
        <p>{ props.age } лет ({ props.isMale ? 'мужчина' : 'женщина' })</p>
        <p>{ props.bio }</p>
    </>
}

export default UserCard;