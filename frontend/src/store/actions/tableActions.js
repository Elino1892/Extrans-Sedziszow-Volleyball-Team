import axios from 'axios'
import {
  TABLE_DETAILS_REQUEST,
  TABLE_DETAILS_SUCCESS,
  TABLE_DETAILS_RESET,
  TABLE_DETAILS_FAIL,

  SHORT_TABLE_DETAILS_REQUEST,
  SHORT_TABLE_DETAILS_SUCCESS,
  SHORT_TABLE_DETAILS_RESET,
  SHORT_TABLE_DETAILS_FAIL
} from '../../constants/tableConstants'

export const getTableDetails = () => async (dispatch) => {
  try {
    dispatch({ type: TABLE_DETAILS_REQUEST })

    const { data } = await axios.get('http://127.0.0.1:8000/api/table')


    dispatch({
      type: TABLE_DETAILS_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: TABLE_DETAILS_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}


export const getShortTableDetails = () => async (dispatch) => {
  try {
    dispatch({ type: SHORT_TABLE_DETAILS_REQUEST })

    const { data } = await axios.get('http://127.0.0.1:8000/api/table/short')


    dispatch({
      type: SHORT_TABLE_DETAILS_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: SHORT_TABLE_DETAILS_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}