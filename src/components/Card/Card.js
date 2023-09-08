import React from 'react';
import './Card.css';
import * as api from '../../utils/Api';

const Card = ({ letter }) => {

  const [ buttonValue, setButtonValue ] = React.useState('Loading...');
  const [ warningSign, setWarningSign ] = React.useState(false);
  const [ status, setStatus ] = React.useState('');
  const [ id, setId] = React.useState('');


  return (
    <>
      <div className='card__info'>
        <div className='card__filler'></div>
        <div className='card__description'>
          <p className='card__text'>{letter.subject}</p>
          <p className='card__text'>{letter.sendDatetime}</p>
        </div>
      </div>
      <div className={`card__button`}>{buttonValue}</div>
      <p className={warningSign ? 'card__warning card__warning_active' : 'card__warning'}>{letter.uuid}</p>
    </>
  );
};

export default Card;