import React, { useState } from 'react'
import { Parallax } from 'react-parallax'
import toast from 'react-hot-toast'

const ContactPara = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  let whatsappUrl = `https://wa.me/918085659484?text=${name + '%0a'}${
    email + '%0a'
  }${subject + '%0a'}${message}`

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target
    const endpoint = 'https://formspree.io/f/mwkjnrnr'
    const formData = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open('POST', endpoint)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        toast.success('Mail Sent to Lokendra')
      } else {
        toast.error('Sorry, there was an error sending your message.')
      }
    }
    xhr.send(formData)
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }

  const senWhatsApp = () => {
    window.open(whatsappUrl, '_blank').focus()
  }

  return (
    <Parallax
      className='paralax'
      bgImage={'/paraImgs/contact.jpg'}
      strength={400}
    >
      <div className='overlay'></div>
      <section id='contacts' className='secondpara'>
        <div className='title '>
          <p style={{ color: 'red', fontFamily: 'Righteous' }}>CONTACT US</p>
          <br />
          <div style={{ color: 'white', fontFamily: 'Righteous' }}>
            Reach out for a new project
          </div>
          <hr />
        </div>
        <div className='contact'>
          <div className='form'>
            <h3>INBOX ME</h3>
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                id='name'
                name='name'
                value={name}
                onChange={e => setName(e.target.value)}
                required
                placeholder='Name'
              />

              <input
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder='E-mail'
              />

              <input
                type='text'
                id='subject'
                name='subject'
                value={subject}
                onChange={e => setSubject(e.target.value)}
                required
                placeholder='Subject'
              />

              <input
                id='message'
                name='message'
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
                placeholder='Message'
              ></input>
              <div className='buttons'>
                <button onClick={handleSubmit} type='submit'>
                  Mail Me
                </button>
                <button onClick={senWhatsApp} type='submit'>
                  WhatsApp Me
                </button>
              </div>
            </form>
          </div>
          <div className='credentials'>
            <div style={{color:'green', fontSize:'1.5em'}} className='title'>Contact Info</div>
            <div className='title'>
              Where to Find Me
              <address>12/G Dhindsa Colony, Kharar, Punjab</address>
              <address>Chandigarh University, Mohali, Punjab</address>
            </div>
            <div className='title'>
              Email Me at <br />
              <i>lokyadav945275@gmail.com</i>
              <br />
              <i>lokie945275@gmail.com</i>
            </div>
            <div className='title'>
              Call me at
              <p>+91 80856 59484</p>
            </div>
            <div className='title init'>
             <a href=""><i class='fa fa-envelope-o' aria-hidden='true'></i></a> 
             <a href=""><i class='fa fa-github' aria-hidden='true'></i></a> 
             <a href=""><i class='fa fa-instagram' aria-hidden='true'></i></a> 
             <a href=""><i class='fa fa-twitter' aria-hidden='true'></i></a> 
            </div>
          </div>
        </div>
      </section>
    </Parallax>
  )
}

export default ContactPara
