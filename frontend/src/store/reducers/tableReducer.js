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


export const tableDetailsReducer = (state = { table: [] }, action) => {
  switch (action.type) {
    case TABLE_DETAILS_REQUEST:
      return { loading: true, table: [] }

    case TABLE_DETAILS_SUCCESS:
      return {
        loading: false,
        table: action.payload,
      }

    case TABLE_DETAILS_FAIL:
      return { loading: false, error: action.payload }

    case TABLE_DETAILS_RESET:
      return { table: [] }

    default:
      return state
  }
}

export const shortTableDetailsReducer = (state = { shortTable: [] }, action) => {
  switch (action.type) {
    case SHORT_TABLE_DETAILS_REQUEST:
      return { loading: true, shortTable: [] }

    case SHORT_TABLE_DETAILS_SUCCESS:
      return {
        loading: false,
        shortTable: action.payload,
      }

    case SHORT_TABLE_DETAILS_FAIL:
      return { loading: false, error: action.payload }

    case SHORT_TABLE_DETAILS_RESET:
      return { shortTable: [] }

    default:
      return state
  }
}


