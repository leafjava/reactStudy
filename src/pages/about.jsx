import React, { PureComponent } from 'react'
import store from '../store'
import {connect} from "react-redux"

export class About extends PureComponent {

  render() {
    const { counter } = this.props

    return (
      <div>
        <h2>About Page:{counter}</h2>
        <div>
          <button>+6</button>
          <button>-6</button>
          <button>-8</button>
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
  counter:state.counter
})

export default connect(mapStateToProps)(About)