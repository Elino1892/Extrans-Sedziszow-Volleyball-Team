import axios from 'axios'
import {
  TEAM_LIST_REQUEST,
  TEAM_LIST_SUCCESS,
  TEAM_LIST_FAIL,

  TEAM_DETAILS_REQUEST,
  TEAM_DETAILS_SUCCESS,
  TEAM_DETAILS_FAIL,
  TEAM_DETAILS_RESET,

  TEAM_DELETE_REQUEST,
  TEAM_DELETE_SUCCESS,
  TEAM_DELETE_FAIL,

  TEAM_CREATE_REQUEST,
  TEAM_CREATE_SUCCESS,
  TEAM_CREATE_FAIL,
  TEAM_CREATE_RESET,

  TEAM_UPDATE_REQUEST,
  TEAM_UPDATE_SUCCESS,
  TEAM_UPDATE_FAIL,
  TEAM_UPDATE_RESET,
} from '../../constants/teamConstants'


export const listTeams = () => async (dispatch) => {
  try {
    dispatch({ type: TEAM_LIST_REQUEST })

    const { data } = await axios.get('http://127.0.0.1:8000/api/teams')


    dispatch({
      type: TEAM_LIST_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: TEAM_LIST_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}

export const getTeamDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: TEAM_DETAILS_REQUEST })

    const { data } = await axios.get(`http://127.0.0.1:8000/api/teams/${id}`)


    dispatch({
      type: TEAM_DETAILS_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: TEAM_DETAILS_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}


export const deleteTeam = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TEAM_DELETE_REQUEST
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
      `http://127.0.0.1:8000/api/teams/delete/${id}/`,
      config
    )

    dispatch({
      type: TEAM_DELETE_SUCCESS,
    })


  } catch (error) {
    dispatch({
      type: TEAM_DELETE_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}




export const createTeam = (group) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TEAM_CREATE_REQUEST
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
      `http://127.0.0.1:8000/api/teams/create/`,
      group,
      config
    )
    dispatch({
      type: TEAM_CREATE_SUCCESS,
      payload: data,
    })

    return data;

  } catch (error) {
    dispatch({
      type: TEAM_CREATE_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}



export const updateTeam = (group) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TEAM_UPDATE_REQUEST
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
      `http://127.0.0.1:8000/api/teams/update/${group.id}/`,
      group,
      config
    )
    dispatch({
      type: TEAM_UPDATE_SUCCESS,
      payload: data,
    })


    dispatch({
      type: TEAM_DETAILS_SUCCESS,
      payload: data
    })


  } catch (error) {
    dispatch({
      type: TEAM_UPDATE_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}
