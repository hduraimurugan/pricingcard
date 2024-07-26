import React from 'react'
import ReactDOM from 'react-dom/client'
import Heading from './Heading';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Heading />
    <App />
  </React.StrictMode>,
)
