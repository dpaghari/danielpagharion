import React from 'react';
import NavBar from './NavBar.js';
// import { Link } from 'react-router';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //active: false
    };
  }

  render() {
    return (
      <section class="header">
        <div class="brand">
          <img src="/img/danbrand.png"/>
          <h1>Daniel Pagharion</h1>
        </div>
        <NavBar/>
      </section>
    );
  }
}
