import Button from "../../UI/Button/Button"
import { useDispatch, useSelector } from "react-redux"
import { deleteNewsComment } from "../../../store/actions/newsActions";

const Comment = ({ user, text, createdAt, id, userInfo }) => {

  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteNewsComment(id))
  }

  return (
    <div className="comment">
      {(userInfo && userInfo.isAdmin) &&
        <Button onClick={deleteHandler} className="comment__delete-item">
          <span className="fas fa-times"></span>
        </Button>
      }
      <p className="comment__user">{user}</p>
      <p className="comment__date">{createdAt}</p>
      <p className="comment__text">{text}</p>
    </div>
  )
}

export default Comment;