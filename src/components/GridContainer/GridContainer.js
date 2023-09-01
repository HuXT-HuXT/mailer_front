import './GridContainer.css';

const GridContainer = ({ letters }) => {
  return (
    <section className='grin-container'>
      {letters.map(letter => {
        return (
          <div key={letter.uuid} className='card'>
            
          </div>
        );
      })}
    </section>
  );
};

export default GridContainer;