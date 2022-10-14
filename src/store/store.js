import math from "../reducer/math"
import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk"

const store = createStore(math, applyMiddleware(thunk))
export default store