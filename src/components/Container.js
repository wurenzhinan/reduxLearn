import { connect } from "react-redux"
import { addAction, squareAction, getAction } from "../actions/actions"
function Container (props) {
  // 这里的num就是mapStateToProps里面的state；
  // add和square就是mapDipatchtoProps的方法
  const { num, add, square, get } = props
  return (
    <div>
      <p>{num}</p>
      <button onClick={() => add(1)}>add1</button>
      <button onClick={() => add(2)}>add2</button>
      <button onClick={() => square()}>square</button>
      <button onClick={() => get()}>get数据</button>
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
    square: () => { dispatch(squareAction()) },
    get: () => { dispatch(getAction()) }
  }
}
// 通过connect连接展示组件和容器组件
export default connect(mapStateToProps, mapDipatchtoProps)(Container)