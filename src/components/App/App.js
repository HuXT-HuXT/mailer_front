import React from 'react';
import './App.css';
import Header from '../Header/Header';
import * as api from '../../utils/Api';
import GridContainer from '../GridContainer/GridContainer';

function App() {
  const [ letters, setLetters ] = React.useState([]);

  React.useEffect(() => {
    setLetters([])
    api.getEvents()
      .then((data) => {
        console.log(data.data)
        data.data.map((item) => {
          setLetters(letters => [...letters, item])
        })
      })
      .catch(err => console.log(err));
  }, [])

  console.log(letters);

  return (
    <div className="page">
      <Header />
      <GridContainer letters={letters} />
    </div>
  );
}

export default App;
