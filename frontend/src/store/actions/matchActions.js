import axios from 'axios'
import {
  MATCH_LIST_REQUEST,
  MATCH_LIST_SUCCESS,
  MATCH_LIST_FAIL,

  MATCH_ROUND_LIST_REQUEST,
  MATCH_ROUND_LIST_SUCCESS,
  MATCH_ROUND_LIST_FAIL,

  MATCH_LAST_LIST_REQUEST,
  MATCH_LAST_LIST_SUCCESS,
  MATCH_LAST_LIST_FAIL,

  MATCH_DETAILS_REQUEST,
  MATCH_DETAILS_SUCCESS,
  MATCH_DETAILS_FAIL,
  MATCH_DETAILS_RESET,

  MATCH_DELETE_REQUEST,
  MATCH_DELETE_SUCCESS,
  MATCH_DELETE_FAIL,

  MATCH_CREATE_REQUEST,
  MATCH_CREATE_SUCCESS,
  MATCH_CREATE_FAIL,
  MATCH_CREATE_RESET,

  MATCH_UPDATE_REQUEST,
  MATCH_UPDATE_SUCCESS,
  MATCH_UPDATE_FAIL,
  MATCH_UPDATE_RESET,
} from '../../constants/matchConstants'


export const listMatches = () => async (dispatch) => {
  try {
    dispatch({ type: MATCH_LIST_REQUEST })

    const { data } = await axios.get('https://extrans-sedziszow-volleyball.herokuapp.com/api/matches')


    dispatch({
      type: MATCH_LIST_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: MATCH_LIST_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}


export const listMatchesWithRound = () => async (dispatch) => {
  try {
    dispatch({ type: MATCH_ROUND_LIST_REQUEST })

    const { data } = await axios.get('https://extrans-sedziszow-volleyball.herokuapp.com/api/matches/round')

    dispatch({
      type: MATCH_ROUND_LIST_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: MATCH_ROUND_LIST_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}

export const listLastMatches = () => async (dispatch) => {
  try {
    dispatch({ type: MATCH_LAST_LIST_REQUEST })

    const { data } = await axios.get('https://extrans-sedziszow-volleyball.herokuapp.com/api/matches/last')

    dispatch({
      type: MATCH_LAST_LIST_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: MATCH_LAST_LIST_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}


export const getMatchDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: MATCH_DETAILS_REQUEST })

    const { data } = await axios.get(`https://extrans-sedziszow-volleyball.herokuapp.com/api/matches/${id}`)


    dispatch({
      type: MATCH_DETAILS_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: MATCH_DETAILS_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}


export const deleteMatch = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MATCH_DELETE_REQUEST
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
      `https://extrans-sedziszow-volleyball.herokuapp.com/api/matches/delete/${id}/`,
      config
    )

    dispatch({
      type: MATCH_DELETE_SUCCESS,
    })


  } catch (error) {
    dispatch({
      type: MATCH_DELETE_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}




export const createMatch = (match) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MATCH_CREATE_REQUEST
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
      `https://extrans-sedziszow-volleyball.herokuapp.com/api/matches/create/`,
      match,
      config
    )
    dispatch({
      type: MATCH_CREATE_SUCCESS,
      payload: data,
    })

    return data;

  } catch (error) {
    dispatch({
      type: MATCH_CREATE_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}



export const updateMatch = (match) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MATCH_UPDATE_REQUEST
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
      `https://extrans-sedziszow-volleyball.herokuapp.com/api/matches/update/${match.id}/`,
      match,
      config
    )
    dispatch({
      type: MATCH_UPDATE_SUCCESS,
      payload: data,
    })


    dispatch({
      type: MATCH_DETAILS_SUCCESS,
      payload: data
    })


  } catch (error) {
    dispatch({
      type: MATCH_UPDATE_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}
