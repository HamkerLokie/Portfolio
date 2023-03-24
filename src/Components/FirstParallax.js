import React from 'react'
import { Parallax } from 'react-parallax'

const FirstParallax = () => {

  const openPdf = () =>{
    window.open('/Resume.pdf', '_blank').focus();
  }

  

  return (
    <Parallax
      className='paralax'
      bgImage='/paraImgs/desktop.jpg'
      strength={400}
    >
      <div className='overlay'></div>
      <div className='logo'> <a href="/">Lokendra Kumar</a> </div>

      <div id='home' className='mainhead'>
        <div className='left'>
          <div className='description'>
            <div className='heading'>I'm Lokendra Kumar</div> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            totam animi, distinctio quas eligendi cum eum quibusdam aperiam
            
          </div>
        </div>
        <div className='links'>
          <a href=''>
            <i class='fa fa-envelope-o' aria-hidden='true'></i>
          </a>
          <a href=''>
            <i class='fa fa-github' aria-hidden='true'></i>
          </a>
          <a href=''>
            <i class='fa fa-instagram' aria-hidden='true'></i>
          </a>
          <a href=''>
            <i class='fa fa-twitter' aria-hidden='true'></i>
          </a>
        </div>
      </div>

      <div  className='submissions'>
        <a href='#contacts' className='btn-sub'>Start Project</a>
        <button onClick={openPdf} className='btn-sub'>Download Resume</button>
      </div>
    </Parallax>
  )
}

export default FirstParallax
