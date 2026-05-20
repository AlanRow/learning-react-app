function MessageCard(props) {

    return (
    <div className="card">
      <div>{ props.message }</div>
      <div className="author">{ props.author }</div>
    </div>
  )
}

export default MessageCard