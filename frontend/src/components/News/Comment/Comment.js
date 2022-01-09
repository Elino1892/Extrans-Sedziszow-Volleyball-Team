const Comment = ({ user, text, createdAt }) => {
  return (
    <div className="comment">
      <p className="comment__user">{user}</p>
      <p className="comment__date">{createdAt}</p>
      <p className="comment__text">{text}</p>
    </div>
  )
}

export default Comment;