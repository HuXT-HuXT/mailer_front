import './GridContainer.css';
import Card from '../Card/Card';

const GridContainer = ({ letters }) => {
  return (
    <section className='grin-container'>
      {letters.map(letter => {
        return (
          <div key={letter.uuid} className='card'>
            <Card letter={letter} />
          </div>
        );
      })}
    </section>
  );
};

export default GridContainer;