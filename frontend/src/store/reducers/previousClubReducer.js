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


export const previousClubListReducer = (state = { previousClubs: [] }, action) => {
  switch (action.type) {
    case PREVIOUS_CLUB_LIST_REQUEST:
      return { loading: true, previousClubs: [] }

    case PREVIOUS_CLUB_LIST_SUCCESS:
      return {
        loading: false,
        previousClubs: action.payload,
      }

    case PREVIOUS_CLUB_LIST_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}



export const previousClubDetailsReducer = (state = { previousClub: {} }, action) => {
  switch (action.type) {
    case PREVIOUS_CLUB_DETAILS_REQUEST:
      return { loading: true, ...state }

    case PREVIOUS_CLUB_DETAILS_SUCCESS:
      return { loading: false, previousClub: action.payload }

    case PREVIOUS_CLUB_DETAILS_FAIL:
      return { loading: false, error: action.payload }

    case PREVIOUS_CLUB_DETAILS_RESET:
      return { previousClub: {} }

    default:
      return state
  }
}


export const previousClubDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PREVIOUS_CLUB_DELETE_REQUEST:
      return { loading: true }

    case PREVIOUS_CLUB_DELETE_SUCCESS:
      return { loading: false, success: true }

    case PREVIOUS_CLUB_DELETE_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}



export const previousClubCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PREVIOUS_CLUB_CREATE_REQUEST:
      return { loading: true }

    case PREVIOUS_CLUB_CREATE_SUCCESS:
      return { loading: false, success: true, previousClub: action.payload }

    case PREVIOUS_CLUB_CREATE_FAIL:
      return { loading: false, error: action.payload }

    case PREVIOUS_CLUB_CREATE_RESET:
      return {}

    default:
      return state
  }
}


export const previousClubUpdateReducer = (state = { previousClub: {} }, action) => {
  switch (action.type) {
    case PREVIOUS_CLUB_UPDATE_REQUEST:
      return { loading: true }

    case PREVIOUS_CLUB_UPDATE_SUCCESS:
      return { loading: false, success: true, previousClub: action.payload }

    case PREVIOUS_CLUB_UPDATE_FAIL:
      return { loading: false, error: action.payload }

    case PREVIOUS_CLUB_UPDATE_RESET:
      return { previousClub: {} }

    default:
      return state
  }
}
