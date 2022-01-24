import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer, userListReducer, userDeleteReducer, userUpdateReducer } from './reducers/userReducer';

import { newsCreateReducer, newsDeleteReducer, newsListReducer, newsUpdateReducer, newsDetailsReducer, newsLastReducer, newsCommentCreateReducer, newsCommentDeleteReducer } from './reducers/newsReducer';

import { playerCreateReducer, playerDeleteReducer, playerListReducer, playerUpdateReducer, playerDetailsReducer } from './reducers/playerReducer';

import { groupCreateReducer, groupDeleteReducer, groupListReducer, groupUpdateReducer, groupDetailsReducer } from './reducers/groupReducer';

import { previousClubListReducer, previousClubCreateReducer, previousClubDeleteReducer, previousClubDetailsReducer, previousClubUpdateReducer } from './reducers/previousClubReducer'

import { playerPreviousClubListReducer, playerPreviousClubCreateReducer, playerPreviousClubDeleteReducer, playerPreviousClubDetailsReducer, playerPreviousClubUpdateReducer } from './reducers/playerPreviousClubReducer'

import { teamCreateReducer, teamDeleteReducer, teamDetailsReducer, teamListReducer, teamUpdateReducer } from './reducers/teamReducer'

import { matchCreateReducer, matchDeleteReducer, matchDetailsReducer, matchLastListReducer, matchListReducer, matchRoundListReducer, matchUpdateReducer } from './reducers/matchReducer'

import { shortTableDetailsReducer, tableDetailsReducer } from './reducers/tableReducer';



export const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,

  newsCreate: newsCreateReducer,
  newsDelete: newsDeleteReducer,
  newsList: newsListReducer,
  newsUpdate: newsUpdateReducer,
  newsDetails: newsDetailsReducer,
  newsLast: newsLastReducer,
  newsCommentCreate: newsCommentCreateReducer,
  newsCommentDelete: newsCommentDeleteReducer,

  playerCreate: playerCreateReducer,
  playerDelete: playerDeleteReducer,
  playerList: playerListReducer,
  playerUpdate: playerUpdateReducer,
  playerDetails: playerDetailsReducer,

  groupCreate: groupCreateReducer,
  groupDelete: groupDeleteReducer,
  groupList: groupListReducer,
  groupUpdate: groupUpdateReducer,
  groupDetails: groupDetailsReducer,

  teamCreate: teamCreateReducer,
  teamDelete: teamDeleteReducer,
  teamList: teamListReducer,
  teamUpdate: teamUpdateReducer,
  teamDetails: teamDetailsReducer,

  matchCreate: matchCreateReducer,
  matchDelete: matchDeleteReducer,
  matchList: matchListReducer,
  matchLastList: matchLastListReducer,
  matchRoundList: matchRoundListReducer,
  matchUpdate: matchUpdateReducer,
  matchDetails: matchDetailsReducer,

  previousClubCreate: previousClubCreateReducer,
  previousClubDelete: previousClubDeleteReducer,
  previousClubList: previousClubListReducer,
  previousClubUpdate: previousClubUpdateReducer,
  previousClubDetails: previousClubDetailsReducer,

  playerPreviousClubCreate: playerPreviousClubCreateReducer,
  playerPreviousClubDelete: playerPreviousClubDeleteReducer,
  playerPreviousClubList: playerPreviousClubListReducer,
  playerPreviousClubUpdate: playerPreviousClubUpdateReducer,
  playerPreviousClubDetails: playerPreviousClubDetailsReducer,

  tableDetails: tableDetailsReducer,
  shortTableDetails: shortTableDetailsReducer,
})


const userInfoFromStorage = localStorage.getItem('userInfo') ?
  JSON.parse(localStorage.getItem('userInfo')) : null


const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
  composeWithDevTools(applyMiddleware(...middleware)))


export default store;