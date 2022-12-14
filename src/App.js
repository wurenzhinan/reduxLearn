import { createStore } from 'redux'
import { addAction, squareAction } from './actions/actions'
import math from "./reducer/math"
//store:存储数据的仓库 store是需要依赖reducer的
// state：数据仓库当中存储的数据，通过getState拿到state
// action对象:存在一个type字段，这个字段描述的是你要执行的操作
// dispatch：唯一可以更改state的方法
// reducer函数：会返回一个新的state，是用来更新state的
// createStore传入reducer，通过getStore拿到state的值，
// 此时state的值要去reducer中找，当没有调用dispatch的时候，state就是reducer中传入的默认值
// 调用dispatch更新state，dispatch的返回值就是传入的action对象
// 再通过getState拿到的state就是更新后的state了
const store = createStore(math)
function App () {
  // console.log(store.getState())
  // store.dispatch(squareAction())
  // console.log(store.dispatch(squareAction(1)))
  // console.log(store.getState())
  return (
    <div className="App">
      <p>{store.getState()}</p>
      <button onClick={() => { store.dispatch(addAction(1)); console.log(store.getState()) }}>add1</button>
      <button onClick={() => { store.dispatch(addAction(2)); console.log(store.getState()) }}>add2</button>
      <button onClick={() => { store.dispatch(squareAction()); console.log(store.getState()) }}>square</button>
    </div>
  )
}

export {
  App,
  store
}

