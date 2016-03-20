import React from 'react';
import { Link } from 'react-router';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  render() {
    if(this.state.active){
      return (
          <nav id="site-nav" class="active">
            <Link to="/">About</Link>
            <Link to="projects">Projects</Link>
            <Link to="contact">Contact Me</Link>
            <Link to="resume">Resume</Link>
            <a href="" onClick={this.toggleActive.bind(this)}>Close</a>
          </nav>
      );
    }
    else {
      return (
          <nav id="site-nav">
            <Link to="/">About</Link>
            <Link to="projects">Projects</Link>
            <Link to="contact">Contact Me</Link>
            <Link to="resume">Resume</Link>
            <a href="" onClick={this.toggleActive.bind(this)}>Open</a>
          </nav>
      );
    }
  }

  toggleActive(e) {
    e.preventDefault();
    var currState = !this.state.active;
    this.setState( { active: currState });
  }
}
