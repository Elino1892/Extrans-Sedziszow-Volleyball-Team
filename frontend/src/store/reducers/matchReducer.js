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


export const matchListReducer = (state = { matches: [] }, action) => {
  switch (action.type) {
    case MATCH_LIST_REQUEST:
      return { loading: true, matches: [] }

    case MATCH_LIST_SUCCESS:
      return {
        loading: false,
        matches: action.payload,
      }

    case MATCH_LIST_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const matchRoundListReducer = (state = { matches: [] }, action) => {
  switch (action.type) {
    case MATCH_ROUND_LIST_REQUEST:
      return { loading: true, matches: [] }

    case MATCH_ROUND_LIST_SUCCESS:
      return {
        loading: false,
        matches: action.payload,
      }

    case MATCH_ROUND_LIST_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export const matchLastListReducer = (state = { matches: [] }, action) => {
  switch (action.type) {
    case MATCH_LAST_LIST_REQUEST:
      return { loading: true, matches: [] }

    case MATCH_LAST_LIST_SUCCESS:
      return {
        loading: false,
        matches: action.payload,
      }

    case MATCH_LAST_LIST_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}



export const matchDetailsReducer = (state = { match: {} }, action) => {
  switch (action.type) {
    case MATCH_DETAILS_REQUEST:
      return { loading: true, ...state }

    case MATCH_DETAILS_SUCCESS:
      return { loading: false, match: action.payload }

    case MATCH_DETAILS_FAIL:
      return { loading: false, error: action.payload }

    case MATCH_DETAILS_RESET:
      return { match: {} }

    default:
      return state
  }
}


export const matchDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case MATCH_DELETE_REQUEST:
      return { loading: true }

    case MATCH_DELETE_SUCCESS:
      return { loading: false, success: true }

    case MATCH_DELETE_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}



export const matchCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case MATCH_CREATE_REQUEST:
      return { loading: true }

    case MATCH_CREATE_SUCCESS:
      return { loading: false, success: true, match: action.payload }

    case MATCH_CREATE_FAIL:
      return { loading: false, error: action.payload }

    case MATCH_CREATE_RESET:
      return {}

    default:
      return state
  }
}


export const matchUpdateReducer = (state = { match: {} }, action) => {
  switch (action.type) {
    case MATCH_UPDATE_REQUEST:
      return { loading: true }

    case MATCH_UPDATE_SUCCESS:
      return { loading: false, success: true, match: action.payload }

    case MATCH_UPDATE_FAIL:
      return { loading: false, error: action.payload }

    case MATCH_UPDATE_RESET:
      return { match: {} }

    default:
      return state
  }
}
