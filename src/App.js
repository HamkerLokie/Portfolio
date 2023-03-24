import './App.css'
import FirstParallax from './Components/FirstParallax'
import SecParallax from './Components/SecParallax'
import ThirdParalax from './Components/ThirdParalax'
import Navbar from './Components/Navbar'
import { useEffect, useState } from 'react'
import Fourthpara from './Components/Fourthpara'
import ContactPara from './Components/ContactPara'

import { Toaster } from 'react-hot-toast'

function App () {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  const [scroll, setscroll] = useState('')

  const openNavbar = () => {
    setIsNavbarOpen(true)
  }

  const closeNavbar = () => {
    setIsNavbarOpen(false)
  }

  window.addEventListener('scroll', function () {
    if (window.scrollY >= 500) {
      setscroll('scroll-class')
    } else {
      setscroll('')
    }
  })

  return (
    <div>
      <Toaster
        position='top-center'
        toastOptions={{
          success: {
            theme: {
              primary: '#4aed88'
            },
            style: {
              color: 'black'
            }
          }
        }}
      ></Toaster>
      <FirstParallax />
      <SecParallax />
      <div onClick={openNavbar} className='navbar-trigger'>
        Menu&nbsp;&nbsp;&nbsp;&nbsp; <i className='fa fa-bars'></i>
      </div>
      <div className={`navbar ${isNavbarOpen ? 'open' : ''}`}>
        <div className='navbar-close' onClick={closeNavbar}>
          <span>NAVIGATION</span>
          <i className='fa fa-times'></i>
        </div>
        <Navbar />
      </div>
      <ThirdParalax />
      <Fourthpara />
      <ContactPara />
      <div className={`arrow ${scroll}`}>
        <a href='#home'>
          <i class='fa fa-arrow-up' aria-hidden='true'></i>
        </a>
      </div>
    </div>
  )
}

export default App
