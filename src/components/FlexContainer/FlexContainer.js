import Card from "../Card/Card";
import './FlexContainer.css'

const FlexContainer = ({ letters, setLayout, updateLetter }) => {


  return (
    <section className="flex-container">
      {letters.map((letter) => {
          return (
            <div key={letter.uuid} className="card">
              <Card letter={letter} setLayout={setLayout} disablePreview={false} updateLetter={updateLetter} />
            </div>
          )
        })
      }
    </section>
  )
}

export default FlexContainer;