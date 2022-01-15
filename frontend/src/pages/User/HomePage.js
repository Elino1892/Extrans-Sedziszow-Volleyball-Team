import Gameplay from "../../components/Home/Gameplay/Gameplay";
import Player from "../../components/Home/Player/Player";
import NewsListBanner from "../../components/Home/NewsListBanner/NewsListBanner";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { listLastNews } from '../../store/actions/newsActions'
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner'


const HomePage = () => {

  const dispatch = useDispatch();

  const newsLast = useSelector(state => state.newsLast);
  const { loading, error, news } = newsLast;


  useEffect(() => {
    document.title = "Strona główna - Extrans Sędziszów Małopolski"
    window.scrollTo(0, 0)

    dispatch(listLastNews())

  }, [dispatch])

  return (
    <>
      {!news.length ? <LoadingSpinner /> :
        <>
          <NewsListBanner
            news={news}
          />
          <Gameplay />
          <Player />
        </>
      }
    </>

  )
}

export default HomePage;