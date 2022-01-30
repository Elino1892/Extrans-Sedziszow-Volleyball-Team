import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import NewsList from "../../components/News/NewsList/NewsList"
import { listNews } from "../../store/actions/newsActions"
import LoadingCover from "../../components/UI/LoadingCover/LoadingCover";


const NewsPage = () => {

  const newsList = useSelector(state => state.newsList)
  const { loading, error, news } = newsList;

  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Aktualności - Extrans Sędziszów Małopolski"
    window.scrollTo(0, 0)
    dispatch(listNews())

  }, [dispatch])

  return (
    <>
      {loading ? <LoadingCover /> :
        <NewsList
          news={news}
        />
      }
    </>
  )
}

export default NewsPage;