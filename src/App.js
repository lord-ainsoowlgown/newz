import './App.css';

import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

const App = () => {
  const pageSize = 20;
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pagesize={pageSize} country="us" category="general" />} />
          <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pagesize={pageSize} country="us" category="business" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pagesize={pageSize} country="us" category="entertainment" />} />
          <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pagesize={pageSize} country="us" category="health" />} />
          <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pagesize={pageSize} country="us" category="science" />} />
          <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pagesize={pageSize} country="us" category="sports" />} />
          <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pagesize={pageSize} country="us" category="technology" />} />
        </Routes>
      </Router>
    </div>
  ) 
}

export default App;