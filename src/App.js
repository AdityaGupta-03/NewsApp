import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/general" element={<News key="general" category="general"/>}></Route>
          <Route path="/science" element={<News key="science" category="science"/>}></Route>
          <Route path="/technology" element={<News key="technology" category="technology"/>}></Route>
          <Route path="/business" element={<News key="business" category="business"/>}></Route>
          <Route path="/entertainment" element={<News key="entertainment" category="entertainment"/>}></Route>
        </Routes>

      </BrowserRouter>
    )
  }
}
