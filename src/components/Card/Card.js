import React from 'react';
import './Card.css';

const Card = ({ letter }) => {
  const [ buttonValue, setButtonValue ] = React.useState('Loading...');


  return (
    <>
      <div className='card__info'>
        <p className='card__about'>{(letter.sendDatetime).split('T')[0]}</p>
        <p className='card__about'>{letter.status}</p>
        <p className='card__title'>{letter.subject}</p>
      </div>
      <button className='card__button'>View layout</button>
      <button className='card__button'>{buttonValue}</button>
    </>
  )
}

export default Card;