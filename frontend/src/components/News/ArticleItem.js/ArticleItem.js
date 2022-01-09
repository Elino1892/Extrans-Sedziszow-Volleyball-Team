import { useEffect, useRef } from "react";
import Gradient from "../../UI/Gradient/Gradient"
import Comment from "../Comment/Comment";

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

const ArticleItem = ({ title, subtitle, description, background, author, createdAt, comments }) => {

  const textInputRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const submitHandler = () => {

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
              {description.map((paragraph, index) =>
                <p key={index} className="article-item__text-paragraph">{paragraph}</p>
              )}
            </div>
          </div>
        </div>

      </div>

      <div className="article-item__comments">
        <p className="article-item__comments-title">Komentarze ({comments.length})</p>
        <div className="article-item__comments-users">
          <form className="article-item__comments-form" onSubmit={submitHandler}>
            <textarea
              ref={textInputRef}
              className="article-item__comments-textarea"
              maxLength={1000}
              minLength={3}
              placeholder="Napisz komentarz..."
              required

            ></textarea>
            {/* <textarea
              ref={textInputRef}
              className="article-item__comments-input"
              input={{
                type: 'text',
                placeholder: 'Napisz komentarz...'
                
              }}
            /> */}
            <Button type={'submit'} className="button article-item__comments-button">Wyślij</Button>
          </form>
          {comments.map(comment =>
            <Comment
              user={comment.user}
              text={comment.text}
              createdAt={comment.createdAt}
            />
          )}
        </div>
      </div>

    </section>
  )
}

export default ArticleItem;