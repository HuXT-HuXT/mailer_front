import React from 'react';
import Card from '../Card/Card';
import './LayoutPage.css';

const LayoutPage = ({ letter }) => {
  console.log(letter)

  return (
    <section className='layout'>
      <div className='layout__card'>
        <Card letter={letter} />
      </div>
      <div className='layout__letter'>
        <div dangerouslySetInnerHTML={{__html: `${letter.body}`}}></div>
      </div>
    </section>
  )
}

export default LayoutPage;