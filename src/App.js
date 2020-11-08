import React, { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import axios from 'axios';

function App() {
  const [joke, setJoke] = useState('');
  const [spinner, setSpinner] =useState(false);
  let btnClick = () => {
    setSpinner(true);
    axios.get('https://api.chucknorris.io/jokes/random')
    .then(data =>{
      setSpinner(false);
      setJoke(data.data.value);
      console.log(data.data.value);
    })
  };
  return (
  <div className="container">
    <h1>Chuck Norris API</h1>
    { spinner ? <Spinner animation="border"/>:  <h3>{joke}</h3>}
    <button className="btn btn-success" onClick={btnClick}>Get Joke!</button>
  </div>
  );
}

export default App;
