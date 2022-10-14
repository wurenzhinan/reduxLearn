import React from 'react'
import ReactDOM from 'react-dom/client'
import { App, store } from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
const render = () => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

render()
store.subscribe(render)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
