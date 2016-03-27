import React from 'react';
import NavBar from './NavBar.js';
import { Link } from 'react-router';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //active: false
    };
  }

  render() {
    return (
      <section class="row" id="sticky-header">
      <NavBar/>
        <h1>Daniel Pagharion</h1>
        <h2>Web Developer</h2>
      </section>
    );
  }
}
