import React from 'react'

const Card = ({ letter }) => {
  return (
    <div className='card__info'>
      <p className='card__about'>{letter.sendDatetime}</p>
      <p className='card__about'>{letter.status}</p>
      <p className='card__title'></p>
    </div>
  )
}

export default Card;