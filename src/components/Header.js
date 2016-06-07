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
          <img src="/img/danbrand.png"/>
          <h1>Daniel Pagharion</h1>
        </div>

        <NavBar/>

      </header>
    );
  }
}
