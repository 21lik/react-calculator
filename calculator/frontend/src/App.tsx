import React from 'react';
import './App.css';
import CalculatorComponent from './components/CalculatorComponent';
import TitleComponent from './components/TitleComponent';

function App() {
  return (
    <div className="App">
      <TitleComponent text="Simple Calculator" />
      <CalculatorComponent />
    </div>
  );
}

export default App;
