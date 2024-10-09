import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 20;
  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
  return (
    <div>
        <Router>
          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pagesize={this.pageSize} country="us" category="general" />} />
            <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pagesize={this.pageSize} country="us" category="business" />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pagesize={this.pageSize} country="us" category="entertainment" />} />
            <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pagesize={this.pageSize} country="us" category="health" />} />
            <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pagesize={this.pageSize} country="us" category="science" />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pagesize={this.pageSize} country="us" category="sports" />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pagesize={this.pageSize} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

