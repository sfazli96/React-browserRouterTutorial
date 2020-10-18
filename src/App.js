import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Directory from "./Directory";
import { Switch, Route } from "react-router-dom";


// So whenever our path is equal to /Directory we want to display the component directory. Our top level of the Route path is the /Directory
// We use the exact path to be / because every single route path we have will contain a /.
// First route that is being run is the exact path. Thats why we write exact.
class App extends Component {
  render() {
    return (
      <div className = "App"> 
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Directory" component={Directory} />
        </Switch>
      </div>
    );
  }
}


export default App;