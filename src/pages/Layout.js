import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="wrapper">
        <div class="container">
          <h1>Daniel Pagharion</h1>
          <h2>Web Developer</h2>
          <Link to="/">About</Link>
          <Link to="projects">Projects</Link>
          <Link to="contact">Contact Me</Link>
          <Link to="resume">Resume</Link>
        </div>
        <div class="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
