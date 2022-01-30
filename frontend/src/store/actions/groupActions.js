import axios from 'axios'
import {
  GROUP_LIST_REQUEST,
  GROUP_LIST_SUCCESS,
  GROUP_LIST_FAIL,

  GROUP_DETAILS_REQUEST,
  GROUP_DETAILS_SUCCESS,
  GROUP_DETAILS_FAIL,
  GROUP_DETAILS_RESET,

  GROUP_DELETE_REQUEST,
  GROUP_DELETE_SUCCESS,
  GROUP_DELETE_FAIL,

  GROUP_CREATE_REQUEST,
  GROUP_CREATE_SUCCESS,
  GROUP_CREATE_FAIL,
  GROUP_CREATE_RESET,

  GROUP_UPDATE_REQUEST,
  GROUP_UPDATE_SUCCESS,
  GROUP_UPDATE_FAIL,
  GROUP_UPDATE_RESET,
} from '../../constants/groupConstants'


export const listGroups = () => async (dispatch) => {
  try {
    dispatch({ type: GROUP_LIST_REQUEST })

    const { data } = await axios.get('https://extrans-sedziszow-volleyball.herokuapp.com/api/groups')


    dispatch({
      type: GROUP_LIST_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: GROUP_LIST_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}

export const getGroupDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: GROUP_DETAILS_REQUEST })

    const { data } = await axios.get(`https://extrans-sedziszow-volleyball.herokuapp.com/api/groups/${id}`)


    dispatch({
      type: GROUP_DETAILS_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: GROUP_DETAILS_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}


export const deleteGroup = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GROUP_DELETE_REQUEST
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
      `https://extrans-sedziszow-volleyball.herokuapp.com/api/groups/delete/${id}/`,
      config
    )

    dispatch({
      type: GROUP_DELETE_SUCCESS,
    })


  } catch (error) {
    dispatch({
      type: GROUP_DELETE_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}




export const createGroup = (group) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GROUP_CREATE_REQUEST
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
      `https://extrans-sedziszow-volleyball.herokuapp.com/api/groups/create/`,
      group,
      config
    )
    dispatch({
      type: GROUP_CREATE_SUCCESS,
      payload: data,
    })

    return data;

  } catch (error) {
    dispatch({
      type: GROUP_CREATE_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}



export const updateGroup = (group) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GROUP_UPDATE_REQUEST
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
      `https://extrans-sedziszow-volleyball.herokuapp.com/api/groups/update/${group.id}/`,
      group,
      config
    )
    dispatch({
      type: GROUP_UPDATE_SUCCESS,
      payload: data,
    })


    dispatch({
      type: GROUP_DETAILS_SUCCESS,
      payload: data
    })


  } catch (error) {
    dispatch({
      type: GROUP_UPDATE_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}
