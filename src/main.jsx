import React from 'react'
import ReactDOM from 'react-dom/client'
import "./components/Home.css"
// import { Home } from './components/Home.jsx'
import {Publications} from './components/Publications'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Publications />
  </React.StrictMode>,
)
