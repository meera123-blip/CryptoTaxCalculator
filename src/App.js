import React from 'react'
import Navbar from './components/navbar'
import TaxCaluculationCard from './components/TaxCaluculationCard'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import { IsOnline } from './utils/IsOnline'
import Offline from './utils/Offline'

const App = () => {
  const status = IsOnline();
  return (!status)?<Offline/>: (
    <div className=' bg-slate-100'>
      <Navbar/>
      <TaxCaluculationCard/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default App