import { connect } from "react-redux"
import { addAction, squareAction } from "../actions/actions"
function Container (props) {
  // 这里的num就是mapStateToProps里面的state；
  // add和square就是mapDipatchtoProps的方法
  const { num, add, square } = props
  return (
    <div>
      <p>{num}</p>
      <button onClick={() => add(1)}>add1</button>
      <button onClick={() => add(2)}>add2</button>
      <button onClick={() => square()}>square</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    num: state
  }
}
const mapDipatchtoProps = (dispatch) => {
  return {
    add: (value) => { dispatch(addAction(value)) },
    square: () => { dispatch(squareAction()) }
  }
}
// 通过connect连接展示组件和容器组件
export default connect(mapStateToProps, mapDipatchtoProps)(Container)