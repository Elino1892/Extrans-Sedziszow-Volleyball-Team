import axios from 'axios'
import {
  PREVIOUS_CLUB_LIST_REQUEST,
  PREVIOUS_CLUB_LIST_SUCCESS,
  PREVIOUS_CLUB_LIST_FAIL,

  PREVIOUS_CLUB_DETAILS_REQUEST,
  PREVIOUS_CLUB_DETAILS_SUCCESS,
  PREVIOUS_CLUB_DETAILS_FAIL,
  PREVIOUS_CLUB_DETAILS_RESET,

  PREVIOUS_CLUB_DELETE_REQUEST,
  PREVIOUS_CLUB_DELETE_SUCCESS,
  PREVIOUS_CLUB_DELETE_FAIL,

  PREVIOUS_CLUB_CREATE_REQUEST,
  PREVIOUS_CLUB_CREATE_SUCCESS,
  PREVIOUS_CLUB_CREATE_FAIL,
  PREVIOUS_CLUB_CREATE_RESET,

  PREVIOUS_CLUB_UPDATE_REQUEST,
  PREVIOUS_CLUB_UPDATE_SUCCESS,
  PREVIOUS_CLUB_UPDATE_FAIL,
  PREVIOUS_CLUB_UPDATE_RESET,
} from '../../constants/previousClubConstants'



export const listPreviousClubs = () => async (dispatch) => {
  try {
    dispatch({ type: PREVIOUS_CLUB_LIST_REQUEST })

    const { data } = await axios.get('https://extrans-sedziszow-volleyball.herokuapp.com/api/previous-clubs')


    dispatch({
      type: PREVIOUS_CLUB_LIST_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: PREVIOUS_CLUB_LIST_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}

export const getPreviousClubDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PREVIOUS_CLUB_DETAILS_REQUEST })

    const { data } = await axios.get(`https://extrans-sedziszow-volleyball.herokuapp.com/api/previous-clubs/${id}`)


    dispatch({
      type: PREVIOUS_CLUB_DETAILS_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: PREVIOUS_CLUB_DETAILS_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}


export const deletePreviousClub = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PREVIOUS_CLUB_DELETE_REQUEST
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
      `https://extrans-sedziszow-volleyball.herokuapp.com/api/previous-clubs/delete/${id}/`,
      config
    )

    dispatch({
      type: PREVIOUS_CLUB_DELETE_SUCCESS,
    })


  } catch (error) {
    dispatch({
      type: PREVIOUS_CLUB_DELETE_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}




export const createPreviousClub = (previousClub) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PREVIOUS_CLUB_CREATE_REQUEST
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
      `https://extrans-sedziszow-volleyball.herokuapp.com/api/previous-clubs/create/`,
      previousClub,
      config
    )
    dispatch({
      type: PREVIOUS_CLUB_CREATE_SUCCESS,
      payload: data,
    })

    return data;

  } catch (error) {
    dispatch({
      type: PREVIOUS_CLUB_CREATE_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}



export const updatePreviousClub = (previousClub) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PREVIOUS_CLUB_UPDATE_REQUEST
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
      `https://extrans-sedziszow-volleyball.herokuapp.com/api/previous-clubs/update/${previousClub.id}/`,
      previousClub,
      config
    )
    dispatch({
      type: PREVIOUS_CLUB_UPDATE_SUCCESS,
      payload: data,
    })


    dispatch({
      type: PREVIOUS_CLUB_DETAILS_SUCCESS,
      payload: data
    })


  } catch (error) {
    dispatch({
      type: PREVIOUS_CLUB_UPDATE_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}