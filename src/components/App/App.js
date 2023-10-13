import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import * as api from '../../utils/Api';
import FlexContainer from '../FlexContainer/FlexContainer';
import LayoutPage from '../LayoutPage/LayoutPage';
import NotFound from '../NotFound/NotFound';
import Loading from '../Loading/Loading';
import ErrorPopup from '../ErrorPopup/ErrorPopup';

function App() {
  const [ letters, setLetters ] = React.useState([]);
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

  const updateLetter = (updatedLetter) => {
    setLetters((state) => state.map((initialLetter) => initialLetter.uuid === updatedLetter.uuid ? updatedLetter : initialLetter));
  };

  return (
    <div className="page">
      <Header />
      <Routes>
        <Route exact path='/' element={loading ? <Loading /> : <FlexContainer letters={ letters } updateLetter={updateLetter} />} />
        <Route path='/letters/:letterUuid' element={loading ? <Loading /> : <LayoutPage updateLetter={updateLetter} /> }/>
        <Route path='/notfound' element={loading ? <Loading /> : <NotFound />} />
      </Routes>
      <ErrorPopup />
    </div>
  );
}

export default App;
