import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer, userListReducer, userDeleteReducer, userUpdateReducer } from './reducers/userReducer';

import { newsCreateReducer, newsDeleteReducer, newsListReducer, newsUpdateReducer, newsDetailsReducer, newsLastReducer, newsCommentCreateReducer } from './reducers/newsReducer';



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