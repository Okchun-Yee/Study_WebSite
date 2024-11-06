// App.js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import "./App.css";
import Footer from './Componment/Footer';
import Header from './Componment/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
