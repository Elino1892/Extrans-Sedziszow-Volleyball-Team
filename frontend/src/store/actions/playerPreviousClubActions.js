import axios from 'axios'
import {
  PLAYER_PREVIOUS_CLUB_LIST_REQUEST,
  PLAYER_PREVIOUS_CLUB_LIST_SUCCESS,
  PLAYER_PREVIOUS_CLUB_LIST_FAIL,

  PLAYER_PREVIOUS_CLUB_DETAILS_REQUEST,
  PLAYER_PREVIOUS_CLUB_DETAILS_SUCCESS,
  PLAYER_PREVIOUS_CLUB_DETAILS_FAIL,
  PLAYER_PREVIOUS_CLUB_DETAILS_RESET,

  PLAYER_PREVIOUS_CLUB_DELETE_REQUEST,
  PLAYER_PREVIOUS_CLUB_DELETE_SUCCESS,
  PLAYER_PREVIOUS_CLUB_DELETE_FAIL,

  PLAYER_PREVIOUS_CLUB_CREATE_REQUEST,
  PLAYER_PREVIOUS_CLUB_CREATE_SUCCESS,
  PLAYER_PREVIOUS_CLUB_CREATE_FAIL,
  PLAYER_PREVIOUS_CLUB_CREATE_RESET,

  PLAYER_PREVIOUS_CLUB_UPDATE_REQUEST,
  PLAYER_PREVIOUS_CLUB_UPDATE_SUCCESS,
  PLAYER_PREVIOUS_CLUB_UPDATE_FAIL,
  PLAYER_PREVIOUS_CLUB_UPDATE_RESET,
} from '../../constants/playerPreviousClubConstants'



export const listPlayerPreviousClubs = () => async (dispatch) => {
  try {
    dispatch({ type: PLAYER_PREVIOUS_CLUB_LIST_REQUEST })

    const { data } = await axios.get('http://127.0.0.1:8000/api/players-previous-clubs')


    dispatch({
      type: PLAYER_PREVIOUS_CLUB_LIST_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: PLAYER_PREVIOUS_CLUB_LIST_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}

export const getPlayerPreviousClubDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PLAYER_PREVIOUS_CLUB_DETAILS_REQUEST })

    const { data } = await axios.get(`http://127.0.0.1:8000/api/players-previous-clubs/${id}`)


    dispatch({
      type: PLAYER_PREVIOUS_CLUB_DETAILS_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: PLAYER_PREVIOUS_CLUB_DETAILS_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}


export const deletePlayerPreviousClub = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PLAYER_PREVIOUS_CLUB_DELETE_REQUEST
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
      `http://127.0.0.1:8000/api/players-previous-clubs/delete/${id}/`,
      config
    )

    dispatch({
      type: PLAYER_PREVIOUS_CLUB_DELETE_SUCCESS,
    })


  } catch (error) {
    dispatch({
      type: PLAYER_PREVIOUS_CLUB_DELETE_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}




export const createPlayerPreviousClub = (playerPreviousClub) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PLAYER_PREVIOUS_CLUB_CREATE_REQUEST
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
      `http://127.0.0.1:8000/api/players-previous-clubs/create/`,
      playerPreviousClub,
      config
    )
    dispatch({
      type: PLAYER_PREVIOUS_CLUB_CREATE_SUCCESS,
      payload: data,
    })

    return data;

  } catch (error) {
    dispatch({
      type: PLAYER_PREVIOUS_CLUB_CREATE_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}



export const updatePlayerPreviousClub = (playerPreviousClub) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PLAYER_PREVIOUS_CLUB_UPDATE_REQUEST
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
      `http://127.0.0.1:8000/api/players-previous-clubs/update/${playerPreviousClub.id}/`,
      playerPreviousClub,
      config
    )
    dispatch({
      type: PLAYER_PREVIOUS_CLUB_UPDATE_SUCCESS,
      payload: data,
    })


    dispatch({
      type: PLAYER_PREVIOUS_CLUB_DETAILS_SUCCESS,
      payload: data
    })


  } catch (error) {
    dispatch({
      type: PLAYER_PREVIOUS_CLUB_UPDATE_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}