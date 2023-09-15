import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => {
  return (
    <Link to='/' className='logo'>
      <p className='logo__title'>Mailer</p>
    </Link>
  )
}

export default Logo;