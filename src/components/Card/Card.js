import React from 'react';
import './Card.css';
import * as api from '../../utils/Api';

const Card = ({ letter }) => {

  const [ buttonValue, setButtonValue ] = React.useState('Loading...');
  const [ warningSign, setWarningSign ] = React.useState(false);
  const [ status, setStatus ] = React.useState('');
  const [ id, setId] = React.useState('');

  React.useEffect(() => {
    api.getStatus(letter.letter.uuid)
      .then((data) => {
        if (data.status === 'not found') {
          setButtonValue(`Запланировать рассылку ${letter.letter.sendDatetime || ''}`);
          setWarningSign(false);
          setStatus('not_scheduled');
        }
        if(data.status === 'NEED-FIX') {
          setButtonValue('Требует внимания');
          setId(data.id);
          setStatus('not_scheduled');
          setWarningSign(true);
        }
        if(data.status === 'DRAFT') {
          setButtonValue('Начать рассылку');
          setId(data.id);
          setWarningSign(false);
        }
        if(data.status === 'SENT') {
          setButtonValue('Доставлено');
          setWarningSign(false);
        }
        if(data.status === 'SCHEDULE') {
          setButtonValue(`Запланировано на ${letter.letter.sendDatetime || ''}`);
          setId(data.id);
          setWarningSign(false);
        }
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <div className='card__info'>
        <div className='card__photo-place'>
          <div className='card__photo' style={{backgroundImage: `url(${letter.photo})`}}></div>
        </div>
        <p className='card__text'>{letter.title}</p>
      </div>
      <div className={`card__button`}>{buttonValue}</div>
      <p className={warningSign ? 'card__warning card__warning_active' : 'card__warning'}>{letter.letter.uuid}</p>
    </>
  );
};

export default Card;