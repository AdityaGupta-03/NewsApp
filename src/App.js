import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container my-3">
          <h1>News:</h1>
          <News />
        </div>
      </div>
    )
  }
}
