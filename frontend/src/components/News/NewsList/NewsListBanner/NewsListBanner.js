import { Link } from 'react-router-dom'

import Gradient from "../../../UI/Gradient/Gradient";

const NewsListBanner = () => {
  return (
    <section className="news-sliders">
      <Link className="news-sliders__main-article" to={"/"}>
        <Gradient type="top-gradient" />
        <Gradient type="bottom-gradient">
          <h1 className="news-sliders__title">W nie najlepszych nastrojach spędzimy przerwę świąteczną...</h1>
          <p className="news-sliders__created-date">sobota, 18 grudnia 2021 | 21:00</p>
        </Gradient>
        <div className="news-sliders__background news-sliders__background-main-article"></div>
        {/* <img className="news-sliders__background" src="../../../../images/268437504_261248222659880_4987107035931412424_n.jpg" alt="obrazek 1" /> */}

      </Link>
      <Link className="news-sliders__second-article" to={"/"}>
        <Gradient type="top-gradient" />
        <Gradient type="bottom-gradient">
          <h1 className="news-sliders__title news-sliders__title--small">Co raz bliżej święta!</h1>
          <p className="news-sliders__created-date">piątek, 17 grudnia 2021 | 15:40</p>
        </Gradient>
        <div className="news-sliders__background news-sliders__background-second-article"></div>
        {/* <img className="news-sliders__background" src="../../../../images/267742441_260641359387233_6497856279913374496_n.jpg" alt="obrazek 2" /> */}
      </Link>
      <Link className="news-sliders__third-article" to={"/"}>
        <Gradient type="top-gradient" />
        <Gradient type="bottom-gradient">
          <h1 className="news-sliders__title news-sliders__title--small">Zapraszamy na ostatni mecz w 2021 roku</h1>
          <p className="news-sliders__created-date">czwartek, 16 grudnia 2021 | 12:00</p>
        </Gradient>
        <div className="news-sliders__background news-sliders__background-third-article"></div>
        {/* <img className="news-sliders__background" src="../../../../images/267939888_261017389349630_8832917883968479510_n.jpg" alt="obrazek 3" /> */}
      </Link>
    </section>
  )
}

export default NewsListBanner;