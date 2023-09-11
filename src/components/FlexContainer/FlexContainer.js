
const FlexContainer = ({ letters }) => {
  return (
    <section className="flex-container">
      {
        letters.map((letter) => {
          return (
            <div key={letter.uuid} className="card">
              
            </div>
          )
        })
      }
    </section>
  )
}

export default FlexContainer;