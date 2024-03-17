import {BrowserRouter , Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './Home';
import About from './About';
import Chart from './Chart';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Chart' element={<Chart />}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
