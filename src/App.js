// import React from 'react';
import React, { Component } from 'react';
import Router from './markup/router';
import './assets/css/bootstrap.css'
import './assets/css/style.css'
import './assets/css/responsive.css'
import './assets/css/color.css'
import './assets/css/d.css'
import './assets/css/sidenav.css'
import './assets/css/JobListing.css'





class App extends Component {

  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;
