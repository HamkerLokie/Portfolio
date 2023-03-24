import React from 'react'
import { Parallax } from 'react-parallax'

const Fourthpara = () => {
  return (
    <Parallax
      style={{ background: 'linear-gradient(black 48%, white 20%)' }}
      className='paralax'
      bgImage={'white'}
      strength={400}
    >
      <section id='projects' className='secondpara sp-fp'>
        <div className='title title-fp'>
          <p style={{ color: 'red', fontFamily: 'Righteous' }}>RECENT WORKS</p>
          <br />
          <div style={{ color: 'white', fontFamily: 'Righteous' }}>
            We love what we do, check out some of our latest works
          </div>
          <hr />
        </div>

        <div className='works'>
          <div className='project-item'>
            <div className='project-name'>
              <p style={{ color: 'white' }}>ALASSO</p>
              <div style={{ color: 'white' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                praesentium cum exercitationem hic ea assumenda nihil quidem
                vitae deserunt facilis dolorum culpa error cumque laborum
                perferendis, molestiae mollitia dolore quod! Maiores reiciendis
                vero tenetur id excepturi adipisci a, fugiat culpa illum qui
                optio, dolores delectus labore? Doloribus cum exercitationem
                iste.
              </div>
            </div>
            <div className='project-image'>
              <img className='pi' src='/projects/alasso.png' alt='' />
              <a className='open' target={'_blank'} href="https://alasso.tech"><i class="fa fa-link" aria-hidden="true"></i></a>
            </div>
          </div>
          <div className='project-item'>
         
            <div className='project-image'>
              <a className='open' target={'_blank'} href="https://alasso.tech"><i class="fa fa-link" aria-hidden="true"></i></a>
              <img className='pi' src='/projects/uniride.png' alt='' />
            </div>
            <div className='project-name'>
              <p style={{ color: 'white' }}>UNI-RIDE</p>
              <div style={{ color: 'white' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                praesentium cum exercitationem hic ea assumenda nihil quidem
                vitae deserunt facilis dolorum culpa error cumque laborum
                perferendis, molestiae mollitia dolore quod! Maiores reiciendis
                vero tenetur id excepturi adipisci a, fugiat culpa illum qui
                optio, dolores delectus labore? Doloribus cum exercitationem
                iste.
              </div>
            </div>
          </div>
          <div className='project-item'>
          <div className='project-name'>
              <p style={{ color: 'white' }}>DICE-GAME</p>
              <div style={{ color: 'white' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                praesentium cum exercitationem hic ea assumenda nihil quidem
                vitae deserunt facilis dolorum culpa error cumque laborum
                perferendis, molestiae mollitia dolore quod! Maiores reiciendis
                vero tenetur id excepturi adipisci a, fugiat culpa illum qui
                optio, dolores delectus labore? Doloribus cum exercitationem
                iste.
              </div>
            </div>
            <div className='project-image'>
              <img className='pi' src='/projects/dice.png' alt='' />
              <a className='open' target={'_blank'} href="https://alasso.tech"><i class="fa fa-link" aria-hidden="true"></i></a>
            </div>
          </div>
          <div className='project-item'>
          <div className='project-image'>
              <img className='pi' src='/projects/learnista.png' alt='' />
              <a className='open' target={'_blank'} href="https://alasso.tech"><i class="fa fa-link" aria-hidden="true"></i></a>
            </div>
          <div className='project-name'>
              <p style={{ color: 'white' }}>LEARNISTA</p>
              <div style={{ color: 'white' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                praesentium cum exercitationem hic ea assumenda nihil quidem
                vitae deserunt facilis dolorum culpa error cumque laborum
                perferendis, molestiae mollitia dolore quod! Maiores reiciendis
                vero tenetur id excepturi adipisci a, fugiat culpa illum qui
                optio, dolores delectus labore? Doloribus cum exercitationem
                iste.
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </Parallax>
  )
}

export default Fourthpara
