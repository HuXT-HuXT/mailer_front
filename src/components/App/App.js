import React from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import * as api from '../../utils/Api';
import FlexContainer from '../FlexContainer/FlexContainer';
import LayoutPage from '../LayoutPage/LayoutPage';
import NotFound from '../NotFound/NotFound';


function App() {
  const [ letters, setLetters ] = React.useState([]);
  const [ selectedLetter, setSelectedLetter ] = React.useState({});

  React.useEffect(() => {
    setLetters([])
    api.getEvents()
      .then((data) => {
        data.data.map((item) => {
          setLetters(letters => [...letters, item])
        })
      })
      .catch(err => console.log(err));
      setSelectedLetter({});
  }, [])

  const setLayout = (letter) => {
    setSelectedLetter(letter);
  }

  return (
    <div className="page">
      <Header />
      <Routes>
        <Route exact path='/' element={<FlexContainer letters={ letters } setLayout={setLayout} />} />
        <Route path={`/${selectedLetter.uuid}`} element={ <LayoutPage letter={selectedLetter} /> }/>
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
