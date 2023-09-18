import React from 'react';
import Card from '../Card/Card';
import BackBar from '../BackBar/BackBar';
import './LayoutPage.css';

const LayoutPage = ({ letter, updateLetter }) => {

  return (
    <section className='layout'>
      <div className='layout__card'>
        <Card letter={letter} disablePreview={true} updateLetter={updateLetter} />
      </div>
      <BackBar />
      <div className='layout__letter-container'>
        <div dangerouslySetInnerHTML={{__html: `${letter.body}`}} className='layout__letter'></div>
      </div>
    </section>
  )
}

export default LayoutPage;