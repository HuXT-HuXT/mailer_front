import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackBar.css';

const BackBar = () => {
  const navigate = useNavigate();

  return (
    <section className='back-bar'>
      <div className='back-bar__button' onClick={() => navigate(-1)}>{'< Назад'}</div>
    </section>
  )
}

export default BackBar;