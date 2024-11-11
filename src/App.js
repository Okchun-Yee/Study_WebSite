import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Discord from './Componment/Discord';
import Footer from './Componment/Footer';
import Header from './Componment/Header';
import Home from './Componment/Home';
import Shared from './Componment/Shared';
import Todaystudy from './Componment/Todaystudy';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        {/* 라우트 설정을 App.js로 이동 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Todaystudy" element={<Todaystudy />} />
          <Route path="/Shared" element={<Shared />}/>
          <Route path="/Discord" element={<Discord />}/>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
