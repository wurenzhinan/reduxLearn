const math = (state = 10, action) => {
  switch (action.type) {
    case "ADD":
      return state + action.num
    case "SQUARE":
      return state * state
    default:
      return state
  }
}
export default math