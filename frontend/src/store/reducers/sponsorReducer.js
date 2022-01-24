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


export const sponsorListReducer = (state = { sponsors: [] }, action) => {
  switch (action.type) {
    case SPONSOR_LIST_REQUEST:
      return { loading: true, sponsors: [] }

    case SPONSOR_LIST_SUCCESS:
      return {
        loading: false,
        sponsors: action.payload,
      }

    case SPONSOR_LIST_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}



export const sponsorDetailsReducer = (state = { sponsor: {} }, action) => {
  switch (action.type) {
    case SPONSOR_DETAILS_REQUEST:
      return { loading: true, ...state }

    case SPONSOR_DETAILS_SUCCESS:
      return { loading: false, sponsor: action.payload }

    case SPONSOR_DETAILS_FAIL:
      return { loading: false, error: action.payload }

    case SPONSOR_DETAILS_RESET:
      return { sponsor: {} }

    default:
      return state
  }
}


export const sponsorDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case SPONSOR_DELETE_REQUEST:
      return { loading: true }

    case SPONSOR_DELETE_SUCCESS:
      return { loading: false, success: true }

    case SPONSOR_DELETE_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}



export const sponsorCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case SPONSOR_CREATE_REQUEST:
      return { loading: true }

    case SPONSOR_CREATE_SUCCESS:
      return { loading: false, success: true, sponsor: action.payload }

    case SPONSOR_CREATE_FAIL:
      return { loading: false, error: action.payload }

    case SPONSOR_CREATE_RESET:
      return {}

    default:
      return state
  }
}


export const sponsorUpdateReducer = (state = { sponsor: {} }, action) => {
  switch (action.type) {
    case SPONSOR_UPDATE_REQUEST:
      return { loading: true }

    case SPONSOR_UPDATE_SUCCESS:
      return { loading: false, success: true, sponsor: action.payload }

    case SPONSOR_UPDATE_FAIL:
      return { loading: false, error: action.payload }

    case SPONSOR_UPDATE_RESET:
      return { sponsor: {} }

    default:
      return state
  }
}
