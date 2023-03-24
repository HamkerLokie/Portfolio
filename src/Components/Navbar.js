import React from 'react'
import './css/Navbar.css'
const Navbar = () => {
  return (
    <div className='nav-list'>
      <ul>
        <li>
          {' '}
          <a href='#home'>Home</a>{' '}
        </li>
        <li>
          {' '}
          <a href='#about'>About</a>{' '}
        </li>
        <li>
          {' '}
          <a href='#services'>Services</a>{' '}
        </li>
        <li>
          {' '}
          <a href='#projects'>Projects</a>{' '}
        </li>
        <li>
          {' '}
          <a href='#contacts'>Contact Me</a>{' '}
        </li>
      </ul>
      <i>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
        dolore perferendis ipsa sapiente? Possimus exercitationem quos minima?
        Praesentium, porro labore?
      </i>
    </div>
  )
}

export default Navbar
