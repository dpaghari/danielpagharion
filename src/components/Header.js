import React from 'react';
import NavBar from './NavBar.js';
// import { Link } from 'react-router';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.state);
    return (
      <header class="header">
        <div class="brand">
          <img src="/img/profile.jpg"/>
          <div>
            <h1>Daniel Pagharion</h1>
            <h2>Web Developer</h2>
            <h3>San Francisco Bay Area</h3>
          </div>
        </div>
        <div class="overlay"></div>

        <NavBar/>

      </header>
    );
  }
}
