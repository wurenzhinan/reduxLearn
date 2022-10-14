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
export {
  addAction,
  squareAction
}