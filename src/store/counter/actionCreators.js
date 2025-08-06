
import * as actionTypes from './constants'
import axios from 'axios'
export const addNumberAction = (num) => ({
  type:actionTypes.ADD_NUMBER,
  num
})

export const subNumberAction = (num) => ({
  type:actionTypes.SUB_NUMBER,
  num
})