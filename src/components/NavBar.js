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
      return (
          <nav id="site-nav" class="active">
            <div class="nav-links">
            <Link to="/">About</Link>
            <Link to="projects">Projects</Link>
            <Link to="nowplaying">Now Playing</Link>
            <a href="assets/Resume.pdf">Resume</a>
            </div>
          </nav>
      );
  }

  toggleActive(e) {
    e.preventDefault();
    var currState = !this.state.active;
    this.setState({ active: currState });
  }

}
