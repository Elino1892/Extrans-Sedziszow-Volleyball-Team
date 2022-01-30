import axios from 'axios'
import {
  PLAYER_LIST_REQUEST,
  PLAYER_LIST_SUCCESS,
  PLAYER_LIST_FAIL,

  PLAYER_DETAILS_REQUEST,
  PLAYER_DETAILS_SUCCESS,
  PLAYER_DETAILS_FAIL,
  PLAYER_DETAILS_RESET,

  PLAYER_DELETE_REQUEST,
  PLAYER_DELETE_SUCCESS,
  PLAYER_DELETE_FAIL,

  PLAYER_CREATE_REQUEST,
  PLAYER_CREATE_SUCCESS,
  PLAYER_CREATE_FAIL,
  PLAYER_CREATE_RESET,

  PLAYER_UPDATE_REQUEST,
  PLAYER_UPDATE_SUCCESS,
  PLAYER_UPDATE_FAIL,
  PLAYER_UPDATE_RESET,
} from '../../constants/playerConstants'


export const listPlayers = () => async (dispatch) => {
  try {
    dispatch({ type: PLAYER_LIST_REQUEST })

    const { data } = await axios.get('https://extrans-sedziszow-volleyball.herokuapp.com/api/players')


    dispatch({
      type: PLAYER_LIST_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: PLAYER_LIST_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}

export const getPlayerDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PLAYER_DETAILS_REQUEST })

    const { data } = await axios.get(`https://extrans-sedziszow-volleyball.herokuapp.com/api/players/${id}`)

    dispatch({
      type: PLAYER_DETAILS_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: PLAYER_DETAILS_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}


export const deletePlayer = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PLAYER_DELETE_REQUEST
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
      `https://extrans-sedziszow-volleyball.herokuapp.com/api/players/delete/${id}/`,
      config
    )

    dispatch({
      type: PLAYER_DELETE_SUCCESS,
    })


  } catch (error) {
    dispatch({
      type: PLAYER_DELETE_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}




export const createPlayer = (player) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PLAYER_CREATE_REQUEST
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
      `https://extrans-sedziszow-volleyball.herokuapp.com/api/players/create/`,
      player,
      config
    )
    dispatch({
      type: PLAYER_CREATE_SUCCESS,
      payload: data,
    })

    return data;

  } catch (error) {
    dispatch({
      type: PLAYER_CREATE_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}



export const updatePlayer = (player) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PLAYER_UPDATE_REQUEST
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

    console.log(player)

    const { data } = await axios.put(
      `https://extrans-sedziszow-volleyball.herokuapp.com/api/players/update/${player.id}/`,
      player,
      config
    )
    dispatch({
      type: PLAYER_UPDATE_SUCCESS,
      payload: data,
    })


    dispatch({
      type: PLAYER_DETAILS_SUCCESS,
      payload: data
    })


  } catch (error) {
    dispatch({
      type: PLAYER_UPDATE_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}
