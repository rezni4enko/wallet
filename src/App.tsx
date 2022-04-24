import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import Login from './components/Login/Login';
import Statistics from './components/Statistics/Statistics';
import Transaction from './components/Transaction/Transaction';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<Expenses />} />
        <Route path='/login' element={<Login />} />
        <Route path='/statistics' element={<Statistics />} />
        <Route path='/transaction/:id' element={<Transaction />} />
      </Routes>
    </div>
  );
}

export default App