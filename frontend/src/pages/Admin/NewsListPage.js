import { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import LoadingSpinner from '../../components/UI/LoadingSpinner/LoadingSpinner'
// import Message from '../components/Message'
import { listNews, deleteNews } from '../../store/actions/newsActions'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { NEWS_DETAILS_RESET } from '../../constants/newsConstants'

import AdminLayout from '../../components/Layout/AdminLayout/AdminLayout'
import NewsList from '../../components/Admin/News/NewsList/NewsList'


const NewsListPage = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const newsList = useSelector(state => state.newsList)
  const { loading, error, news } = newsList

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const newsDelete = useSelector(state => state.newsDelete)
  const { success: successDelete } = newsDelete

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      document.title = "Aktualności - Administrator"
      window.scrollTo(0, 0)
      dispatch(listNews())
      dispatch({ type: NEWS_DETAILS_RESET })
    } else {
      navigate('/logowanie')
    }

  }, [dispatch, userInfo, navigate, successDelete])

  const deleteHandler = (id) => {

    if (window.confirm('Jesteś pewny, że chcesz usunąć ten artykuł?')) {
      dispatch(deleteNews(id))
    }
  }



  return (
    <AdminLayout>
      {loading ? <LoadingSpinner /> :
        <NewsList
          news={news}
          deleteHandler={deleteHandler}
          loading={loading}
          error={error}
        />
      }
    </AdminLayout>
  )
}

export default NewsListPage;