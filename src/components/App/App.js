import React from 'react';
import './App.css';
import Header from '../Header/Header';
import * as api from '../../utils/Api';
import FlexContainer from '../FlexContainer/FlexContainer';


function App() {
  const [ letters, setLetters ] = React.useState([]);

  React.useEffect(() => {
    setLetters([])
    api.getEvents()
      .then((data) => {
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
      <FlexContainer letters={letters} />
    </div>
  );
}

export default App;
