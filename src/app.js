/**
 * 项目入口文件
 * @file src/app.js
 * @author codingplayboy
 * @date 2017/12/14
 */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'babel-polyfill'
import './styles/clear.scss'
import 'normalize.css/normalize.css'
import createStore, { makeRootSaga } from './store/'
import Routes from './routes/'
import appReducer, { AppSaga } from './store/AppFlux'

const rootSaga = makeRootSaga([AppSaga])

// 调用createStore方法创建store
const store = createStore({}, {
  app: appReducer
}, rootSaga)

const style = {
  container: {
    height: '100%',
    minHeight: '99%'
  }
}

/**
 * 项目根组件
 * @class App
 * @extends Component
 */
class App extends Component {
  shouldComponentUpdate () {
    return false
  }

  componentDidMount () {}

  componentDidCatch (error, info) {
    // You can also log the error to an error reporting service
    console.log(error, info)
  }

  render () {
    const { store } = this.props

    return (
      <Provider store={store}>
        <div style={style.container}>
          <Routes />
        </div>
      </Provider>
    )
  }
}

// 渲染根组件
ReactDOM.render(
  <App store={store} />,
  document.getElementById('app')
)