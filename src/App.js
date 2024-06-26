import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  // Accessing Key from the env files
  apiKey = process.env.REACT_APP_API_KEY;
  state = {
    progress: 10
  }
  setProgress = (progress)=>{
    this.setState({ progress: progress });
  }
  render() {

    return (
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={this.state.progress}
        />
        <Routes>
          <Route path="/" element={<News api={this.apiKey} setProgress={this.setProgress} key="general" category="general" />}></Route>
          <Route path="/general" element={<News api={this.apiKey} setProgress={this.setProgress} key="general" category="general" />}></Route>
          <Route path="/science" element={<News api={this.apiKey} setProgress={this.setProgress} key="science" category="science" />}></Route>
          <Route path="/technology" element={<News api={this.apiKey} setProgress={this.setProgress} key="technology" category="technology" />}></Route>
          <Route path="/business" element={<News api={this.apiKey} setProgress={this.setProgress} key="business" category="business" />}></Route>
          <Route path="/entertainment" element={<News api={this.apiKey} setProgress={this.setProgress} key="entertainment" category="entertainment" />}></Route>
          <Route path="/health" element={<News api={this.apiKey} setProgress={this.setProgress} key="health" category="health" />}></Route>
          <Route path="/sports" element={<News api={this.apiKey} setProgress={this.setProgress} key="sports" category="sports" />}></Route>
        </Routes>

      </BrowserRouter>
    )
  }
}
