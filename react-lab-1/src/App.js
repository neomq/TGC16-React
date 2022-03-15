import React from 'react';
import './App.css';

function App () {
  return(
    <React.Fragment>
      <h1>Hello World</h1>
      <p style={{backgroundColor:'yellow'}}>Welcome to our first React App</p>
      <img src={require('./plant.jpeg')} alt="plant"/>
    </React.Fragment>
  );
}

export default App;