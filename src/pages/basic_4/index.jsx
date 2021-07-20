import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

// class Basic_4 extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       number: 0
//     }
//   }

//   handleClick() {

// this.setState({
//   number: 1
// }, (state, props) => {
//   console.log(this.state)
// })
// console.log('1', new Date().getTime())
// setTimeout(() => {
//   console.log('4', new Date().getTime())
//   this.setState({
//     number: 1
//   })
//   console.log(this.state.number)
// }, 1000)
// console.log('2', new Date().getTime())
// console.log('3', new Date().getTime())

// this.setState({
//   number: this.state.number + 1
// }, () => {
//   console.log('cb_1', this.state.number)
// })
// console.log(this.state.number)
// this.setState({
//   number: this.state.number + 1
// }, () => {
//   console.log('cb_2', this.state.number)
// })
// console.log(this.state.number)
// this.setState({
//   number: this.state.number + 1
// }, () => {
//   console.log('cb_3', this.state.number)
// })
// console.log(this.state.number)

// setTimeout(() => {
//   this.setState({
//     number: this.state.number + 1
//   }, () => {
//     console.log('cb_1', this.state.number)
//   })
//   console.log(this.state.number)
//   this.setState({
//     number: this.state.number + 1
//   }, () => {
//     console.log('cb_2', this.state.number)
//   })
//   console.log(this.state.number)
//   this.setState({
//     number: this.state.number + 1
//   }, () => {
//     console.log('cb_3', this.state.number)
//   })
//   console.log(this.state.number)
// }, 1000)
//   }

//   render() {
//     return <div>
//       {this.state.number}
//       <button onClick={this.handleClick.bind(this)}>number ++ </button>
//     </div>
//   }
// }

// function Basic_4() {

//   const [number, setNumber] = useState(0)

//   const btnClick = () => {
//     setNumber(2)
//     console.log(number)
//     setTimeout(() => {
//       setNumber(5)
//       console.log(number)
//     }, 1000)
//   }

//   return <div>
//     {number}
//     <button onClick={btnClick}>down</button>
//   </div>
// }

// class Basic_4 extends React.Component {

//   state = { number: 0 }

//   btnClick() {
//     setTimeout(() => {
//       this.setState({ number: 1 })
//     })
//     this.setState({ number: 2 })
//     ReactDOM.flushSync(() => {
//       this.setState({ number: 3 })
//     })
//     this.setState({ number: 4 })
//     // this.setState({
//     //   number: 2
//     // })
//     // console.log(this.state.number)
//     // setTimeout(() => {
//     //   this.setState({
//     //     number: 3
//     //   })
//     //   console.log(this.state.number)
//     // }, 0)
//   }

//   render() {
//     console.log(this.state.number)
//     return <div>
//       {this.state.number}
//       <button onClick={this.btnClick.bind(this)}>down</button>
//     </div>
//   }

// }

function Basic_4() {
  const [number, setNumber] = useState(0)

  useEffect(() => {
    console.log('监听number变化，此时的number是:  ' + number)
  }, [number])

  const handerClick = () => {
    /** 高优先级更新 **/
    ReactDOM.flushSync(() => {
      setNumber(2)
    })
    /* 批量更新 */
    setNumber(1)
    /* 滞后更新 ，批量更新规则被打破 */
    setTimeout(() => {
      setNumber(3)
    })
  }

  console.log(number)
  return <div>
    <span> {number}</span>
    <button onClick={handerClick}  >number++</button>
  </div>

}

export default Basic_4