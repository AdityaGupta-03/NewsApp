import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/general"><News key="general" category="general"/></Route>
          <Route path="/science"><News key="science" category="science"/></Route>
          <Route path="/technology"><News key="technology" category="technology"/></Route>
          <Route path="/business"><News key="business" category="business"/></Route>
          <Route path="/entertainment"><News key="entertainment" category="entertainment"/></Route>
        </Switch>

      </BrowserRouter>
    )
  }
}
