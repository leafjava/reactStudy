import React, { PureComponent } from 'react'
import store from '../store'
import {connect, Provider,useSelector,useDispatch} from "react-redux"
import { addNumberAction, subNumberAction } from '../store/counter'

export class About extends PureComponent {

  calcNumber(num, isAdd){
    if(isAdd){
      console.log('加',num)
      this.props.addNumber(num)
    } else {
      console.log('减',num)
      this.props.subNumber(num)
    }
  }

  render() {
    const { counter,banners,recommends,userInfo } = this.props

    return (
      <div>
        <div className='user'>
          <h2>nickname:{userInfo.nickname}</h2>
        </div>
        <h2>About Page:{counter}</h2>
        <div>
          <button onClick={e => this.calcNumber(6,true)}>+6</button>
          <button onClick={e => this.calcNumber(-6,true)}>-6</button>
          <button onClick={e => this.calcNumber(-8,true)}>-8</button>
          <button onClick={e => this.calcNumber(88,false)}>-8</button>
        </div>
        <div className='banner'>
          <h2>轮播图数据:</h2>
          <ul>
            {
              banners.map((item,index) => {
                return <li key={index}>{item.title}</li>
              })
            }
          </ul>
        </div>
        <div className='recommend'>
          <h2>推荐数据:</h2>
          <ul>
            {
              recommends.map((item,index) => {
                return <li key={index}>{item.title}</li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

// connect()返回值是一个高阶函数
// function mapStateToProps(state){
//   return {
//     counter:state.counter
//   }
// }



const mapStateToProps = (state) => ({
  counter:state.counter.counter,
  banners:state.home.banners,
  recommends:state.home.recommends,
  userInfo:state.user.userInfo
})

// function fn2(dispatch){
//   return {
//     addNumber(num){
//       dispatch(addNumberAction(num))
//     },
//     subNumber(num){
//       dispatch(subNumberAction(num))
//     }
//   }
// }

const mapDispatchToProps = (dispatch) => ({
  addNumber:(num) => {
    // const action = addNumberAction(num)
    // console.log('派发一个action',action)
    dispatch(addNumberAction(num))
    // console.log(store.getState())
  },
  subNumber:(num) => dispatch(subNumberAction(num))
})


export default connect(mapStateToProps, mapDispatchToProps)(About)