import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Story from './pages/Story/Story';
import SupportPage from './pages/SupportPage/SupportPage';
import WatchDetail from './pages/WatchDetail/WatchDetail';
import CustomCursor from './components/CustomCursor/CustomCursor';
import './App.css';

function App() {
  return (
    <>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/watch/:slug" element={<WatchDetail />} />
      </Routes>
    </>
  );
}

export default App;