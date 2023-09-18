import React, { useState } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import * as api from '../../utils/Api';
import FlexContainer from '../FlexContainer/FlexContainer';
import LayoutPage from '../LayoutPage/LayoutPage';
import NotFound from '../NotFound/NotFound';
import Loading from '../Loading/Loading';

function App() {
  const [ letters, setLetters ] = React.useState([]);
  const [ selectedLetter, setSelectedLetter ] = React.useState({});
  const [ loading, setLoading ] = useState(false);

  React.useEffect(() => {
    setLoading(true);
    setLetters([]);
    api.getEvents()
      .then((data) => {
        const sortedLetters = data.data.sort((a, b) => (a.sendDatetime > b.sendDatetime) ? 1 : -1)
        sortedLetters.map((item) => {
          setLetters(letters => [...letters, item])
          setLoading(false);
        })
      })
      .catch(err => console.log(err))
  }, []);  

  React.useEffect(() => {
    if (letters.length === 0) {
      return;
    }
    setLoading(true);
    const savedUuid = localStorage.getItem('letter');
    const savedLetter = letters.filter((letter) => letter.uuid === savedUuid);
    if (savedLetter) {
      setSelectedLetter(savedLetter[0]);
      setLoading(false);
    }
  }, [letters]);

  const setLayout = (letter) => {
    localStorage.setItem('letter', letter.uuid);    
    setSelectedLetter(letter);
  };

  const updateLetter = (updatedLetter) => {
    setLetters((state) => state.map((initialLetter) => initialLetter.uuid === updatedLetter.uuid ? updatedLetter : initialLetter));
  }

  return (
    <div className="page">
      <Header />
      <Routes>
        <Route exact path='/' element={loading ? <Loading /> : <FlexContainer letters={ letters } setLayout={setLayout} updateLetter={updateLetter} />} />
        {selectedLetter && <Route path={`/letters/${selectedLetter.uuid}`} element={loading ? <Loading /> : <LayoutPage letter={selectedLetter} updateLetter={updateLetter} /> }/>}
        <Route path='/*' element={loading ? <Loading /> : <NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
