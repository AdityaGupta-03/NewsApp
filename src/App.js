import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h1 className='my-3'>News:</h1>
          <News />
        </div>
      </div>
    )
  }
}
