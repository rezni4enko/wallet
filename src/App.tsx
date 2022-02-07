import React from 'react';
import './App.css';
import Calculator from './components/Calculator/Calculator';
import Navbar from './components/Navbar/Navbar';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Calculator />
    </div>
  );
}

export default App
