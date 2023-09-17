import Card from "../Card/Card";
import './FlexContainer.css'

const FlexContainer = ({ letters, setLayout }) => {


  return (
    <section className="flex-container">
      {letters.map((letter) => {
          return (
            <div key={letter.uuid} className="card">
              <Card letter={letter} setLayout={setLayout} disablePreview={false} />
            </div>
          )
        })
      }
    </section>
  )
}

export default FlexContainer;