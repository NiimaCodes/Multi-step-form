import React from 'react'
import Service from './Componenets/our service/service'
import Navbar from './Componenets/navbar/Navbar'
import Header from './Componenets/header/header'
import Recource from './Componenets/recource2/recource2'
import Recource2 from './Componenets/recource/recource'
import Services from './Componenets/our services2/service'
import Feature from './Componenets/feature/feature'
import Information from './Componenets/information/Information'
import Contact from './Componenets/contact/contact'
import Footer from './Componenets/footer/footer'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Feature/>
      <Information/>
      <Service/>
      <Services/>
      <Recource/>
      <Recource2/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
