import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import Login from './components/Login/Login';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Expenses />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App
