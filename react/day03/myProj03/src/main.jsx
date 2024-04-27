import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './App.css'
import Header from './Header.jsx'
import Home from './Home.jsx'
import Latestproduct from './Latestproduct.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <Home />
    <Latestproduct />
  </React.StrictMode>
)
