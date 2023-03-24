import React from 'react'
import { Parallax } from 'react-parallax'
import './css/secondpara.css'

const SecParallax = () => {
  return (
    <Parallax className='paralax' bgImage='/paraImgs/pencil.jpg' strength={400}>
      {/* <div className='overlay'></div> */}

      <div id='about' className='secondpara'>
        <div className='title'>
          <p>HELLO THERE</p>
          <br />
          <div>LOKENDRA KUMAR</div>
          <hr />
        </div>
        <div className='description'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi minima consectetur nesciunt minus iste nulla beatae, corporis reprehenderit error eaque ut voluptas id placeat omnis corrupti, ea velit? Cum in eos repudiandae? Laudantium omnis obcaecati, totam explicabo, dolor facilis impedit veritatis ducimus ab velit iste? Velit porro laborum, eius reiciendis eos nam unde harum beatae assumenda officiis. Praesentium minus fugiat ipsam nesciunt reiciendis. Quos unde consequatur earum dolore maiores consequuntur ea ullam aliquid minima repudiandae possimus impedit doloribus numquam doloremque quis repellat expedita excepturi officiis, odio eaque hic recusandae. Nostrum, veritatis eos. Ad, iusto repellendus ipsum recusandae ex voluptatem quibusdam.
        </div>
        <div className='records'>
          <div className='cads first'>
            <p>500</p>
            <span>Awards Recieved</span>
          </div>
          <div className='cads second'>
            <p>5400</p>
            <span>Cups of Coffee</span>
          </div>
          <div className='cads third'>
            <p>500</p>
            <span>Projects Completed</span>
          </div>
          <div className='cads fouth'>
            <p>500</p>
            <span>Happy Clients</span>
          </div>
        </div>
      </div>
    </Parallax>
  )
}

export default SecParallax
