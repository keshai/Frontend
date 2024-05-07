import './App.css'
import HomePage from './Component/Home/HomePage'
import Header from './Component/Header/Header'
import ProductPage from './Component/Products/ProductPage'
import AboutPage from './Component/About/AboutPage'
import ContactPage from './Component/Contact/ContactPage'
import Footer from './Component/Footer/Footer'

import { Routes , Route } from 'react-router-dom'

function App() {

  return (
    <>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<ProductPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
          <Footer />
    </>
  )
}

export default App
