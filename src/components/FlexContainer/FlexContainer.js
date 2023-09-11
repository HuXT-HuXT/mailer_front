import Card from "../Card/Card";
import './FlexContainer.css'

const FlexContainer = ({ letters }) => {
  const sortedLetters = letters.sort((a, b) => (a.sendDatetime > b.sendDatetime) ? 1 : -1)

  return (
    <section className="flex-container">
      {sortedLetters.map((letter) => {
          return (
            <div key={letter.uuid} className="card">
              <Card letter={letter} />
            </div>
          )
        })
      }
    </section>
  )
}

export default FlexContainer;