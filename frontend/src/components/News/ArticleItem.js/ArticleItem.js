import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Gradient from "../../UI/Gradient/Gradient"
import Comment from "../Comment/Comment";
import { Link } from 'react-router-dom'

import { createNewsComment } from "../../../store/actions/newsActions";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

const ArticleItem = ({ title, subtitle, description, background, author, createdAt, comments, userInfo, articleId }) => {

  const textInputRef = useRef();

  const dispatch = useDispatch();

  // const newsCommentCreate = useSelector(state => state.newsCommentCreate);
  // const { loading, error, success } = newsCommentCreate;



  const submitHandler = (e) => {
    e.preventDefault();

    if (textInputRef.current.value) {
      dispatch(createNewsComment(articleId, textInputRef.current.value))
    }
  }



  return (
    <section className="article-item">
      <div
        className="article-item__photo"
      // style={{ backgroundImage: `url(${background})` }}
      >
        <Gradient type="top-opacity-gradient"></Gradient>
        <div className="artice-item__photo-container">
          <img src={background} alt="" className="article-item__photo-bgc" />
        </div>
        <Gradient type="bottom-opacity-gradient"></Gradient>
      </div>

      <div className="article-item__text-container">
        <div className="article-item__text">
          <div className="article-item__text-skew-container">
            <div className="article-item__text-content">
              <p className="article-item__text-author">Autor: {author}</p>
              <h1 className="article-item__text-title">{title}</h1>
              <p className="article-item__text-date">{createdAt}</p>
              <h2 className="article-item__text-subtitle">{subtitle}</h2>
              {/* {description.map((paragraph, index) => */}
              <p className="article-item__text-paragraph">{description}</p>
              {/* )} */}
            </div>
          </div>
        </div>

      </div>

      <div className="article-item__comments">
        <p className="article-item__comments-title">Komentarze ({comments.length})</p>
        <div className="article-item__comments-users">

          {/* {success} */}

          {userInfo ? (
            <form className="article-item__comments-form" onSubmit={(e) => submitHandler(e)}>
              <textarea
                ref={textInputRef}
                className="article-item__comments-textarea"
                maxLength={1000}
                minLength={3}
                placeholder="Napisz komentarz..."
                required

              ></textarea>
              <Button type={'submit'} className="button article-item__comments-button">Wyślij</Button>
            </form>
          ) :
            <p className="article-item__comments-info">Proszę się <Link className="article-item__comments-info-link" to={'/logowanie'}>zalogować</Link>, aby napisać komentarz</p>

          }


          {comments.map(comment =>
            <Comment
              key={comment.id}
              id={comment.id}
              user={comment.user}
              text={comment.text}
              createdAt={comment.createdAt}
              userInfo={userInfo}
            />
          )}
        </div>
      </div>

    </section>
  )
}

export default ArticleItem;