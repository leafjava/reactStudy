import { configureStore,applyMiddleware,compose,combineReducers } from '@reduxjs/toolkit'
import thunk from "redux-thunk"
import counterReducer from './counter'
import homeReducer from './home'
import userReducer from './user'

// 正常情况下 store.dispatch(对象)
// 想要派发函数 store.dispatch(function)

// 将两个reducer合并在一起
const reducer = combineReducers({
  counter:counterReducer,
  home:homeReducer,
  user:userReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
  reducer
})

export default store
