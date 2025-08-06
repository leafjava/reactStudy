import { configureStore,applyMiddleware,compose } from '@reduxjs/toolkit'
import thunk from "redux-thunk"
import reducer from './reducer'

// 正常情况下 store.dispatch(对象)
// 想要派发函数 store.dispatch(function)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
  reducer
})

export default store
