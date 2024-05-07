import React from 'react'
import Home from './Home'
import Latestproduct from './Latestproduct'
import AboutSection from './AboutSection'
import Purchage from './Purchage'

const HomePage = () => {
  return (
    <>
        <Home h4="best offer" h1="New arrivals on sale" />
        <Latestproduct />
        <AboutSection />
        <Purchage />
    </>
)
}

export default HomePage