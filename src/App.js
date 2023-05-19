
import React from 'react';
import './App.css';
import Row from './components/Row/Row';
import requests from './api/Requests';

function App() {
  return (
    <div className="App">
        
        <Row title= "NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
        <Row title= "Trending Now" fetchUrl={requests.fetchTrending} />

    </div>
  );
}

export default App;
