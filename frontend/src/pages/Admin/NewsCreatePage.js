import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import NewsCreate from "../../components/Admin/News/NewsCreate/NewsCreate";
import { NEWS_CREATE_RESET } from "../../constants/newsConstants"
import AdminLayout from '../../components/Layout/AdminLayout/AdminLayout';
import { createNews } from '../../store/actions/newsActions';

const NewsCreatePage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const newsCreate = useSelector(state => state.newsCreate)
  const { loading: loadingCreate, error: errorCreate, success: successCreate } = newsCreate


  useEffect(() => {

    if (userInfo && userInfo.isAdmin) {
      document.title = "Tworzenie artykułu";
      window.scrollTo(0, 0)
    } else {
      navigate('/logowanie');
    }

    if (successCreate) {
      dispatch({ type: NEWS_CREATE_RESET })
      navigate('/admin/aktualnosci');
    }
  }, [userInfo, navigate, successCreate, dispatch])


  const submitHandler = (e, title, subtitle, description, picture) => {
    e.preventDefault();

    dispatch(createNews({
      title,
      subtitle,
      description,
    })).then((data) => {
      uploadFileHandler(picture[0], data.id)
    })

  }


  const uploadFileHandler = async (file, id) => {
    const formData = new FormData()

    formData.append('image', file)
    formData.append('news_id', id)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }

      await axios.post('http://127.0.0.1:8000/api/news/upload/', formData, config)

    } catch (error) {
      throw new Error(error)
    }
  }

  return (
    <AdminLayout>
      <NewsCreate
        submitHandler={submitHandler}
        loadingCreate={loadingCreate}
        errorCreate={errorCreate}
      />
    </AdminLayout>
  )
}

export default NewsCreatePage;