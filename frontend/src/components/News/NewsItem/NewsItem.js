import { Link } from "react-router-dom"

import Card from "../../UI/Card/Card"
import Gradient from "../../UI/Gradient/Gradient"

const NewsItem = ({ id, title, description, background, author, createdAt }) => {
  return (
    <Link to={`/aktualnosci/${id}`} className="news-item-link">
      <Card nameClass="news-item" >

        <Gradient type="top-gradient" style={{ borderRadius: '14px' }} />
        <Gradient type="bottom-gradient" style={{ borderRadius: '14px' }}>
          <h2 className="news-item__title">{title}</h2>
          <p className="news-item__created-date">{createdAt}</p>
        </Gradient>
        <div className="news-item__card-body" style={{ backgroundImage: `url(${background})` }}></div>
      </Card >
    </Link>
  )
}

export default NewsItem;