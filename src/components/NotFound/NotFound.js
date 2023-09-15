import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='notfound'>
      <p className='notfound__number'>404</p>
      <p className='notfound__text'>Страница не найдена</p>
      <button className='notfound__button' onClick={() => navigate(-1)}>Назад</button>
    </div>
  )
}

export default NotFound;