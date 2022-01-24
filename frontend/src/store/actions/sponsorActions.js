import axios from 'axios'
import {
  SPONSOR_LIST_REQUEST,
  SPONSOR_LIST_SUCCESS,
  SPONSOR_LIST_FAIL,

  SPONSOR_DETAILS_REQUEST,
  SPONSOR_DETAILS_SUCCESS,
  SPONSOR_DETAILS_FAIL,
  SPONSOR_DETAILS_RESET,

  SPONSOR_DELETE_REQUEST,
  SPONSOR_DELETE_SUCCESS,
  SPONSOR_DELETE_FAIL,

  SPONSOR_CREATE_REQUEST,
  SPONSOR_CREATE_SUCCESS,
  SPONSOR_CREATE_FAIL,
  SPONSOR_CREATE_RESET,

  SPONSOR_UPDATE_REQUEST,
  SPONSOR_UPDATE_SUCCESS,
  SPONSOR_UPDATE_FAIL,
  SPONSOR_UPDATE_RESET,
} from '../../constants/sponsorConstants'


export const listSponsors = () => async (dispatch) => {
  try {
    dispatch({ type: SPONSOR_LIST_REQUEST })

    const { data } = await axios.get('http://127.0.0.1:8000/api/sponsors')


    dispatch({
      type: SPONSOR_LIST_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: SPONSOR_LIST_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}

export const getSponsorDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: SPONSOR_DETAILS_REQUEST })

    const { data } = await axios.get(`http://127.0.0.1:8000/api/sponsors/${id}`)


    dispatch({
      type: SPONSOR_DETAILS_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: SPONSOR_DETAILS_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}


export const deleteSponsor = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SPONSOR_DELETE_REQUEST
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
      `http://127.0.0.1:8000/api/sponsors/delete/${id}/`,
      config
    )

    dispatch({
      type: SPONSOR_DELETE_SUCCESS,
    })


  } catch (error) {
    dispatch({
      type: SPONSOR_DELETE_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}




export const createSponsor = (sponsor) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SPONSOR_CREATE_REQUEST
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
      `http://127.0.0.1:8000/api/sponsors/create/`,
      sponsor,
      config
    )
    dispatch({
      type: SPONSOR_CREATE_SUCCESS,
      payload: data,
    })

    return data;

  } catch (error) {
    dispatch({
      type: SPONSOR_CREATE_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}



export const updateSponsor = (sponsor) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SPONSOR_UPDATE_REQUEST
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
      `http://127.0.0.1:8000/api/sponsors/update/${sponsor.id}/`,
      sponsor,
      config
    )
    dispatch({
      type: SPONSOR_UPDATE_SUCCESS,
      payload: data,
    })


    dispatch({
      type: SPONSOR_DETAILS_SUCCESS,
      payload: data
    })


  } catch (error) {
    dispatch({
      type: SPONSOR_UPDATE_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}
