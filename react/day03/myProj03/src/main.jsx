import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './App.css'
import Header from './Header.jsx'
import Home from './Home.jsx'
import Latestproduct from './Latestproduct.jsx'
import AboutSection from './AboutSection.jsx'
import Purchase from './Purchage.jsx'

import ProductPage from './ProductPage.jsx'
import AboutPage from './AboutPage.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
      <Header />
      <Home h4="Best Offer" h1="New Arrivals On" />
      <Latestproduct />
      <AboutSection heading="Our Background" title="Who we are & What we do?" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis." link="Read More" />
      <Purchase />
      <ProductPage />
      <AboutPage />
  </React.StrictMode>
)
