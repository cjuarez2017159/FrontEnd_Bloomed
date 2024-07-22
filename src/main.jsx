import React from 'react'
import ReactDOM from 'react-dom/client'
import "./components/Home.css"
// import { Home } from './components/Home.jsx'
import { Video } from './components/Video.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Video />
  </React.StrictMode>,
)
