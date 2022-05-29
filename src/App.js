import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
export default class App extends Component {
  apikey=process.env.REACT_APP_NEWS_API
  render() {
    return (
      <div>
        <Navbar/>
        {/* <News pageSize={6} category="sports" country={"in"}/> */}
        <Router>
          <Routes>
            <Route path="/business" category="business"  element={<News category={"business"} apikey={this.apikey} country={"in"} pagesize={6} />} />
            <Route path="/science" category="science" element={<News category={"science"} apikey={this.apikey} country={"in"} pagesize={6} />} />
            <Route exect path="/entertainment"  element={<News category={"entertainment"} apikey={this.apikey} country={"in"} pagesize={6}/>} />
            <Route exect path="/general" element={<News category={"general"} country={"in"} apikey={this.apikey} pagesize={6}/>} />
            <Route exect path="/health"  element={<News category={"health"} country={"in"} apikey={this.apikey} pagesize={6}/>} />
            <Route exect path="/sports" element={<News category={"sports"} country={"in"} apikey={this.apikey} pagesize={6}/>} />
            <Route exect path="/technology"  element={<News category={"technology"} apikey={this.apikey} country={"in"} pagesize={6}/>} />
            <Route exect path="/" element={<News category={"technology"} country={"in"} apikey={this.apikey} pagesize={6}/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}

