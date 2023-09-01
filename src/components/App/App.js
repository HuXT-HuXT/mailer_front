import './App.css';
import Header from '../Header/Header';
import * as api from '../../utils/Api';
import React from 'react';

function App() {

  React.useEffect(() => {
    api.getEvents()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }, [])

  return (
    <div className="page">
      <Header />
    </div>
  );
}

export default App;
