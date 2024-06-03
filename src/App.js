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
          <Route path="/general"><News category="general"/></Route>
          <Route path="/science"><News category="science"/></Route>
          <Route path="/technology"><News category="science"/></Route>
          <Route path="/business"><News category="business"/></Route>
          <Route path="/entertainment"><News category="entertainment"/></Route>
        </Switch>

      </BrowserRouter>
    )
  }
}
