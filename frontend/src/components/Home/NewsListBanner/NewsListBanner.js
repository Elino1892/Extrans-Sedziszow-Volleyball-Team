import { Link } from 'react-router-dom'

import Gradient from "../../UI/Gradient/Gradient";

const NewsListBanner = ({ news }) => {
  return (
    <section className="news-sliders">
      <Link className="news-sliders__main-article" to={`/aktualnosci/${news[0].id}`}>
        <Gradient type="top-gradient" />
        <Gradient type="bottom-gradient">
          <h1 className="news-sliders__title">{news[0].title}</h1>
          <p className="news-sliders__created-date">{news[0].createdAt}</p>
        </Gradient>
        <div style={{ backgroundImage: `url(${news[0].image})` }} className="news-sliders__background news-sliders__background-main-article"></div>
        {/* <img className="news-sliders__background" src="../../../../images/268437504_261248222659880_4987107035931412424_n.jpg" alt="obrazek 1" /> */}

      </Link>
      <Link className="news-sliders__second-article" to={`/aktualnosci/${news[1].id}`}>
        <Gradient type="top-gradient" />
        <Gradient type="bottom-gradient">
          <h1 className="news-sliders__title news-sliders__title--small">{news[1].title}</h1>
          <p className="news-sliders__created-date">{news[1].createdAt}</p>
        </Gradient>
        <div style={{ backgroundImage: `url(${news[1].image})` }} className="news-sliders__background news-sliders__background-second-article"></div>
        {/* <img className="news-sliders__background" src="../../../../images/267742441_260641359387233_6497856279913374496_n.jpg" alt="obrazek 2" /> */}
      </Link>
      <Link className="news-sliders__third-article" to={`/aktualnosci/${news[2].id}`}>
        <Gradient type="top-gradient" />
        <Gradient type="bottom-gradient">
          <h1 className="news-sliders__title news-sliders__title--small">{news[2].title}</h1>
          <p className="news-sliders__created-date">{news[2].createdAt}</p>
        </Gradient>
        <div style={{ backgroundImage: `url(${news[2].image})` }} className="news-sliders__background news-sliders__background-third-article"></div>
        {/* <img className="news-sliders__background" src="../../../../images/267939888_261017389349630_8832917883968479510_n.jpg" alt="obrazek 3" /> */}
      </Link>
    </section>
  )
}

export default NewsListBanner;