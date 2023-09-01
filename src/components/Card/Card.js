import React from 'react';
import './Card.css';

const Card = ({ letter }) => {

  const [ buttonValue, setButtonValue ] = React.useState('Кнопка!');
  const [ buttonColor, setButtonColor ] = React.useState('card__button_black')

  React.useEffect(() => {
    if (letter.status === 'NEED-FIX') {
      setButtonValue('Требует внимания');
      setButtonColor('card__button_orange')
    }
    if (letter.status === 'SCHEDULE') {
      setButtonValue('Отменить');
      setButtonColor('card__button_green')
    }
    if (letter.status === 'DRAFT') {
      setButtonValue('Начать рассылку');
      setButtonColor('card__button_yellow')
    }
    if (letter.status === 'SENT') {
      setButtonValue('Доставлено');
      setButtonColor('card__button_white')
    }
  }, [])

  return (
    <>
      <div className='card__info'>
        <div className='card__photo-place'>
          <div className='card__photo' style={{backgroundImag: `url(${letter.photo})`}}></div>
        </div>
        <p className='card__text'>{letter.subject}</p>
      </div>
      <div className={`card__button ${buttonColor}`}>{buttonValue}</div>
      <p className='card__warning'>{letter.uuid}</p>
    </>
  );
};

export default Card;