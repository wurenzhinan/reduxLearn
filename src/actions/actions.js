import { ADD, SQUARE } from '../constans/actionTypes'
const addAction = (num) => {
  return {
    type: ADD,
    num
  }
}
const squareAction = () => {
  return {
    type: SQUARE
  }
}
const getAction = () => {
  // 由于getAction要发起一个异步请求，则不能返回一个对象，而是返回一个方法
  return (dispatch, getState) => {
    fetch("./data.json")
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: 'GET',
          num: Number(res[3])
        })
      })
  }
}
export {
  addAction,
  squareAction,
  getAction
}