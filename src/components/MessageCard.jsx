function MessageCard(props) {

    return (
    <div className="card">
      <div>{ props.message }</div>
      <div className="author">Author</div>
    </div>
  )
}

export default MessageCard