import React from 'react';
import './App.css';
import Price from './Price';

function App() {
  return (
    <div className="App">
      <h1>Basic Attention Token (BAT) Price</h1>
      <p className="copy">*price is updated every 30 seconds</p>
      <Price />
    </div>
  );
}

export default App;
