import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import * as api from '../../utils/Api';

const Card = ({ letter, disablePreview, updateLetter }) => {
  const [ buttonValue, setButtonValue ] = React.useState('Loading...');
  const [ status, setStatus ] = React.useState('Loading...');
  const [ disabledButton, setDisabledButton ] = React.useState(false);
  const [ apiStatus, setApiStatus ] = React.useState(letter.status);
  const [ buttonStyle, setButtonStyle ] = React.useState('card__button card__button_green')

  React.useEffect(() => {

    checkStatus(apiStatus);
  }, []);

  const checkStatus = (status) => {
    if (status === 'DRAFT') {
      setButtonValue('Запланировать');
      setStatus('Не запланирована');
      setButtonStyle('card__button card__button_green');
    }
    if (status === 'SCHEDULE') {
      setButtonValue('Отменить');
      setStatus('Запланирована');
      setButtonStyle('card__button card__button_red');
    }
    if (status === 'MODERATING ') {
      setButtonValue('Отменить');
      setStatus('На модерации');
      setButtonStyle('card__button card__button_red');
    }
    if (status === 'CREATED') {
      setButtonValue('Отменить');
      setStatus('Создана');
      setButtonStyle('card__button card__button_red');
    }
    if (status === 'PROCESSING') {
      setButtonValue('Отменить');
      setStatus('В обработке');
      setButtonStyle('card__button card__button_red');
    }
    if (status === 'SENT') {
      setButtonValue('Отменить');
      setStatus('Отправлена');
      setDisabledButton(true);
    }
    if (status === 'BLOCKED') {
      setButtonValue('Отменить');
      setStatus('Заблокирована');
      setButtonStyle('card__button card__button_red');
    }
    // if (status === 'SUBSCRIBE') {
    //   setButtonValue('Отменить');
    //   setStatus('?');
    // }
    if (status === 'BLOCKED-SPAM') {
      setButtonValue('Отменить');
      setStatus('Заблокирована как спам');
      setButtonStyle('card__button card__button_red');
    }
    if (status === 'NEED-FIX') {
      setButtonValue('Отменить');
      setStatus('Требует доработки');
      setButtonStyle('card__button card__button_red');
    }
  }

  const handleSendButton = () => {
    setButtonValue('Loading...');
    if (apiStatus === 'DRAFT') {
      api.scheduleCamp(letter.uuid)
        .then((data) => {
          if (data.meta.text === 'OK') {
            return api.getStatus(letter.uuid)
              .then((data) => {
                setApiStatus(data.data.status);
                checkStatus(data.data.status);
                updateLetter(data.data);
              })
              .catch(err => console.log(err))
          }
        })
        .catch(err => console.log(err))
    } else {
      api.removeCamp(letter.uuid)
        .then((data) => {
          if (data.meta.text === 'OK') {
            return api.getStatus(letter.uuid)
              .then((data) => {
                setApiStatus(data.data.status);
                checkStatus(data.data.status);
                updateLetter(data.data);
              })
              .catch(err => console.log(err))
          }
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <>
      <div className={disablePreview ? 'card__info card__info_wider' : 'card__info'}>
        <div className='card__about-part'>
          <div className='card__about'>{(letter.sendDatetime).split('T')[0]}</div>
          <div className='card__about'>{status}</div>
        </div>
        <div className='card__title'>{letter.subject}</div>
      </div>
      <div className={disablePreview ? 'card__buttons card__buttons-narrow' : 'card__buttons'}>
        <Link to={`/letters/${letter.uuid}`}>
          <button className={disablePreview ? `card__button card__button_disabled` : 'card__button'} >Просмотр макета</button>
        </Link>
        <button className={disabledButton ? `${buttonStyle} card__button_disabled` : `${buttonStyle}`} onClick={handleSendButton}>{buttonValue}</button>
      </div>
    </>
  )
}

export default Card;