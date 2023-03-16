import './style.css';
import React from 'react';
import Converter from './Converter';
import Explain from './Explain';
import Comment from './Comment'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='*' element={<Home />} />
          <Route exact path='/converter' element={<Converter />} />
          <Route exact path='/explain' element={<Explain />} />
          <Route exact path='/comment' element={<Comment />} />
        </Routes>
      </BrowserRouter>
      </>
    );
}

export default App;
