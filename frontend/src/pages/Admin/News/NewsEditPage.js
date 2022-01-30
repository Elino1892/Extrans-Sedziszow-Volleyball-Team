import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { NEWS_UPDATE_RESET } from "../../../constants/newsConstants"
import AdminLayout from '../../../components/Layout/AdminLayout/AdminLayout';
import { getNewsDetails, updateNews } from '../../../store/actions/newsActions';
import NewsEdit from '../../../components/Admin/News/NewsEdit/NewsEdit';
import LoadingSpinner from '../../../components/UI/LoadingSpinner/LoadingSpinner'

const NewsEditPage = () => {

  const params = useParams()
  const { id: newsId } = params;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const newsDetails = useSelector(state => state.newsDetails)
  const { loading, error, news } = newsDetails

  const newsUpdate = useSelector(state => state.newsUpdate)
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = newsUpdate


  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      document.title = "Edycja artykułu";
      window.scrollTo(0, 0)
      if (successUpdate) {
        dispatch({ type: NEWS_UPDATE_RESET })
        navigate('/admin/aktualnosci');
      }
      else if (!news.title || news.id !== Number(newsId)) {
        dispatch(getNewsDetails(newsId))
      }
    } else {
      navigate('/logowanie');
    }
  }, [userInfo, navigate, successUpdate, dispatch, news, newsId])


  const submitHandler = (e, title, subtitle, description, picture) => {
    e.preventDefault();

    dispatch(updateNews({
      id: newsId,
      title,
      subtitle,
      description,
    }))

    uploadFileHandler(picture[0])
  }


  const uploadFileHandler = async (file) => {
    const formData = new FormData()

    formData.append('image', file)
    formData.append('news_id', newsId)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }

      await axios.post('https://extrans-sedziszow-volleyball.herokuapp.com/api/news/upload/', formData, config)

    } catch (error) {
      throw new Error(error)
    }
  }

  return (
    <AdminLayout>
      {loading ? <LoadingSpinner /> :
        <NewsEdit
          news={news}
          submitHandler={submitHandler}
          loadingUpdate={loadingUpdate}
          errorUpdate={errorUpdate}
        />
      }
    </AdminLayout>
  )
}

export default NewsEditPage;