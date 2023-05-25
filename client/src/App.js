import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
        <Route path='/' element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
