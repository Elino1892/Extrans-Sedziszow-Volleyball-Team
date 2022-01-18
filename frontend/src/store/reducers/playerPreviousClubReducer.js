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


export const playerPreviousClubListReducer = (state = { playerPreviousClubs: [] }, action) => {
  switch (action.type) {
    case PLAYER_PREVIOUS_CLUB_LIST_REQUEST:
      return { loading: true, playerPreviousClubs: [] }

    case PLAYER_PREVIOUS_CLUB_LIST_SUCCESS:
      return {
        loading: false,
        playerPreviousClubs: action.payload,
      }

    case PLAYER_PREVIOUS_CLUB_LIST_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}



export const playerPreviousClubDetailsReducer = (state = { playerPreviousClub: {} }, action) => {
  switch (action.type) {
    case PLAYER_PREVIOUS_CLUB_DETAILS_REQUEST:
      return { loading: true, ...state }

    case PLAYER_PREVIOUS_CLUB_DETAILS_SUCCESS:
      return { loading: false, playerPreviousClub: action.payload }

    case PLAYER_PREVIOUS_CLUB_DETAILS_FAIL:
      return { loading: false, error: action.payload }

    case PLAYER_PREVIOUS_CLUB_DETAILS_RESET:
      return { playerPreviousClub: {} }

    default:
      return state
  }
}


export const playerPreviousClubDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PLAYER_PREVIOUS_CLUB_DELETE_REQUEST:
      return { loading: true }

    case PLAYER_PREVIOUS_CLUB_DELETE_SUCCESS:
      return { loading: false, success: true }

    case PLAYER_PREVIOUS_CLUB_DELETE_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}



export const playerPreviousClubCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PLAYER_PREVIOUS_CLUB_CREATE_REQUEST:
      return { loading: true }

    case PLAYER_PREVIOUS_CLUB_CREATE_SUCCESS:
      return { loading: false, success: true, playerPreviousClub: action.payload }

    case PLAYER_PREVIOUS_CLUB_CREATE_FAIL:
      return { loading: false, error: action.payload }

    case PLAYER_PREVIOUS_CLUB_CREATE_RESET:
      return {}

    default:
      return state
  }
}


export const playerPreviousClubUpdateReducer = (state = { playerPreviousClub: {} }, action) => {
  switch (action.type) {
    case PLAYER_PREVIOUS_CLUB_UPDATE_REQUEST:
      return { loading: true }

    case PLAYER_PREVIOUS_CLUB_UPDATE_SUCCESS:
      return { loading: false, success: true, playerPreviousClub: action.payload }

    case PLAYER_PREVIOUS_CLUB_UPDATE_FAIL:
      return { loading: false, error: action.payload }

    case PLAYER_PREVIOUS_CLUB_UPDATE_RESET:
      return { playerPreviousClub: {} }

    default:
      return state
  }
}




