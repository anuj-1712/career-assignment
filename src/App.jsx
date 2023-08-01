import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import SideBar from './components/SideBar'
import About from './components/About'
import Features from './components/Features'
import Companies from './components/Companies'
import Slider from './components/Slider'
import Hire from './components/Hire'
import Career from './components/Career'
import Footer from './components/Footer'

function App() {
  const openNav = () =>{
    document.getElementById("sidebar").style.display = "flex"
  }

  const closeNav = () =>{
    document.getElementById("sidebar").style.display = "none"
  }
  return (
    <>
     <Header openNav={openNav}/>
     <SideBar closeNav={closeNav}/>
     <Hero />
     <About />
     <Features />
     <Companies />
     <Slider />
     <Career />
     <Hire />
     <Footer />
    </>
  )
}

export default App
