import Card from "../Card/Card";
import './FlexContainer.css'

const FlexContainer = ({ letters, setLayout }) => {
  const sortedLetters = letters.sort((a, b) => (a.sendDatetime > b.sendDatetime) ? 1 : -1)

  return (
    <section className="flex-container">
      {sortedLetters.map((letter) => {
          return (
            <div key={letter.uuid} className="card">
              <Card letter={letter} setLayout={setLayout} />
            </div>
          )
        })
      }
    </section>
  )
}

export default FlexContainer;