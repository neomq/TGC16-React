import React from 'react';
import Alert from './Alert';

function sayGoodbye () {
  return "Goodbye"
}

function displayHeader() {
  return(
    <h2>About Me</h2>
  );
}

function ImageFrame() {
  return (
    <img src={require('./plant.jpeg')} alt="plant"/>
  )
}

function App () {
  return (
    <React.Fragment>
      <h1>Hello World</h1>

      {/* A - Calling a function from JSX */}
      <p>{sayGoodbye()}</p>

      {/* B - Creating a function that returns JSX */}
      {displayHeader()}

      {/* C - Creating a component that returns JSX */}
      <ImageFrame/>

      <Alert message="danger danger will robinson!"/>

    </React.Fragment>
  );
}

export default App;