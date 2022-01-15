import axios from 'axios'
import {
  NEWS_LIST_REQUEST,
  NEWS_LIST_SUCCESS,
  NEWS_LIST_FAIL,

  NEWS_DETAILS_REQUEST,
  NEWS_DETAILS_SUCCESS,
  NEWS_DETAILS_FAIL,

  NEWS_DELETE_REQUEST,
  NEWS_DELETE_SUCCESS,
  NEWS_DELETE_FAIL,

  NEWS_CREATE_REQUEST,
  NEWS_CREATE_SUCCESS,
  NEWS_CREATE_FAIL,
  NEWS_CREATE_RESET,

  NEWS_UPDATE_REQUEST,
  NEWS_UPDATE_SUCCESS,
  NEWS_UPDATE_FAIL,
  NEWS_UPDATE_RESET,


  NEWS_CREATE_COMMENT_REQUEST,
  NEWS_CREATE_COMMENT_SUCCESS,
  NEWS_CREATE_COMMENT_FAIL,
  NEWS_CREATE_COMMENT_RESET,

  NEWS_LAST_REQUEST,
  NEWS_LAST_SUCCESS,
  NEWS_LAST_FAIL,
} from '../../constants/newsConstants'


export const listNews = () => async (dispatch) => {
  try {
    dispatch({ type: NEWS_LIST_REQUEST })

    const { data } = await axios.get('http://127.0.0.1:8000/api/news')

    dispatch({
      type: NEWS_LIST_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: NEWS_LIST_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}

export const listLastNews = () => async (dispatch) => {
  try {
    dispatch({ type: NEWS_LAST_REQUEST })

    const { data } = await axios.get(`http://127.0.0.1:8000/api/news/last`)

    dispatch({
      type: NEWS_LAST_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: NEWS_LAST_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}


export const getNewsDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: NEWS_DETAILS_REQUEST })

    const { data } = await axios.get(`http://127.0.0.1:8000/api/news/${id}`)


    dispatch({
      type: NEWS_DETAILS_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: NEWS_DETAILS_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}


export const deleteNews = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: NEWS_DELETE_REQUEST
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    await axios.delete(
      `http://127.0.0.1:8000/api/news/delete/${id}/`,
      config
    )

    dispatch({
      type: NEWS_DELETE_SUCCESS,
    })


  } catch (error) {
    dispatch({
      type: NEWS_DELETE_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}




export const createNews = (article) => async (dispatch, getState) => {
  try {
    dispatch({
      type: NEWS_CREATE_REQUEST
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.post(
      `http://127.0.0.1:8000/api/news/create/`,
      article,
      config
    )
    dispatch({
      type: NEWS_CREATE_SUCCESS,
      payload: data,
    })

    return data;

  } catch (error) {
    dispatch({
      type: NEWS_CREATE_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}



export const updateNews = (news) => async (dispatch, getState) => {
  try {
    dispatch({
      type: NEWS_UPDATE_REQUEST
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.put(
      `http://127.0.0.1:8000/api/news/update/${news.id}/`,
      news,
      config
    )
    dispatch({
      type: NEWS_UPDATE_SUCCESS,
      payload: data,
    })


    dispatch({
      type: NEWS_DETAILS_SUCCESS,
      payload: data
    })


  } catch (error) {
    dispatch({
      type: NEWS_UPDATE_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}

export const createNewsComment = (articleId, comment) => async (dispatch, getState) => {
  try {
    dispatch({
      type: NEWS_CREATE_COMMENT_REQUEST
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.post(
      `http://127.0.0.1:8000/api/news/${articleId}/comments/`,
      comment,
      config
    )
    dispatch({
      type: NEWS_CREATE_COMMENT_SUCCESS,
      payload: data,
    })



  } catch (error) {
    dispatch({
      type: NEWS_CREATE_COMMENT_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}

