import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'
import axios from 'axios'

axios.get('/').then(response => {
  console.log(response, "from server")
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  )
})


