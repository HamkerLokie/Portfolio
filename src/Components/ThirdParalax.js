import React from 'react'
import { Parallax } from 'react-parallax'
import './css/secondpara.css'

const ThirdParalax = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      desc: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi minima consectetur nesciunt minus iste nulla beatae, corporis reprehenderit error eaque ut voluptas id placeat omnis corrupti, ea velit? Cum in eos repudiandae? Laudantium omnis obcaecati, totam explicabo, dolor facilis '
    },
    {
      id: 2,
      title: 'Web Design',
      desc: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi minima consectetur nesciunt minus iste nulla beatae, corporis reprehenderit error eaque ut voluptas id placeat omnis corrupti, ea velit? Cum in eos repudiandae? Laudantium omnis obcaecati, totam explicabo, dolor facilis '
    },
    {
      id: 3,
      title: 'Code Debugging',
      desc: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi minima consectetur nesciunt minus iste nulla beatae, corporis reprehenderit error eaque ut voluptas id placeat omnis corrupti, ea velit? Cum in eos repudiandae? Laudantium omnis obcaecati, totam explicabo, dolor facilis '
    },
    {
      id: 4,
      title: 'College Projects',
      desc: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi minima consectetur nesciunt minus iste nulla beatae, corporis reprehenderit error eaque ut voluptas id placeat omnis corrupti, ea velit? Cum in eos repudiandae? Laudantium omnis obcaecati, totam explicabo, dolor facilis '
    }
  ]
  let index = 1
  return (
    <Parallax className='paralax' bgImage={'white'} strength={400}>

      <div id='services' className='secondpara'>
        <div className='title'>
          <p>WHAT WE DO</p>
          <br />
          <div style={{ color: 'black' }}>
            EVERYTHING TO EASE YOUR COLLEGE LIFE
          </div>
          <hr />
        </div>
        <div className='description th-desc'>
          {services.map(i => {
            return (
              <div key={i.id} className='services'>
                <div className='icon'>
                  <img src={`/services/img${index++}.png`} alt='' />
                </div>
                <div className='label'>
                  <div  className='tit'>
                    {i.title}
                  </div>
                  <div
                    style={{  fontFamily: 'Gruppo' }}
                    className='desc'
                  >
                    {i.desc}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Parallax>
  )
}

export default ThirdParalax
