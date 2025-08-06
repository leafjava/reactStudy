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

// combineReducers 实现原理(了解)
// function reducer(state = {},action){

//   // 返回一个对象,store的state
//   return {
//     counter:counterReducer(state.counter, action)
//     home:homeReducer(state.home, action)
//     user:userReducer(state.home, action)

//     // counter:{
//     //   counter:200
//     // },
//     // home:{
//     //   banners:[],
//     //   recommends:[]
//     // },
//     // user:{
//     //   userInfo:{nickname:'刘军老师',level:100}
//     // }
//   }
// }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
  reducer
})

export default store
