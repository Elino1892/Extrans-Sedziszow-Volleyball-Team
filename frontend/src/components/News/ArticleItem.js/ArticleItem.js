import Gradient from "../../UI/Gradient/Gradient"

const ArticleItem = ({ title, subtitle, description, background, author, createdAt }) => {
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

    </section>
  )
}

export default ArticleItem;