import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
  return (
    <div>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<News key="general" pagesize={20} country="us" category="science" />} />
            <Route path="/business" element={<News key="business" pagesize={20} country="us" category="business" />} />
            <Route path="/entertainment" element={<News key="entertainment" pagesize={20} country="us" category="entertainment" />} />
            <Route path="/health" element={<News key="health" pagesize={20} country="us" category="health" />} />
            <Route path="/science" element={<News key="science" pagesize={20} country="us" category="science" />} />
            <Route path="/sports" element={<News key="sports" pagesize={20} country="us" category="sports" />} />
            <Route path="/technology" element={<News key="technology" pagesize={20} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

