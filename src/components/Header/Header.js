import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => (
  <div className='Header'>
    Header
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/'>Home</NavLink>
  </div>
)

export default Header
