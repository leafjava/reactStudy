import { configureStore,applyMiddleware,compose,combineReducers } from '@reduxjs/toolkit'
// import thunk from "redux-thunk"
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

// 对每次派发的action进行拦截，进行日志打印
function log(store){
  const next = store.dispatch

  function logAndDispatch(action){
    console.log("当前派发的action:",action)

    // 真正派发的代码:要使用之前的dispatch进行派发
    next(action)

    console.log("派发之后的结果:",store.getState())
  }

  // monkey patch:猴补丁 => 篡改现有的代码,对整体的执行逻辑进行修改
  store.dispatch = logAndDispatch
}
log(store)

function thunk(store){
  const next = store.dispatch
  function dispatchThunk(action){
    if(typeof action === "function"){
      action(store.dispatch,store.getState)
    } else {
      next(action)
    }
  }
  store.dispatch = dispatchThunk
}

// store.dispatch(function(dispatch,getState){
//   dispatch({

//   })
// })

thunk(store)

export default store
