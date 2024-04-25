import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Header from './Header'
import Menu from './Menu'
import Middle from './Middle'
import Footer from './Footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Menu />
    <Middle />
    <Footer />
  </React.StrictMode>,
)
