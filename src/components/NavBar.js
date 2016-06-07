import React from 'react';
import { IndexLink, Link } from 'react-router';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
          <nav id="site-nav">
            <div class="nav-links">
            <IndexLink activeClassName="active" to="/">About</IndexLink>
            <Link activeClassName="active" to="/projects">Projects</Link>
            <Link activeClassName="active" to="/nowplaying">Now Playing</Link>
            <Link activeClassName="active" to="/contact">Contact</Link>
            <a href="assets/Resume.pdf">Resumè</a>
            </div>
          </nav>
      );
  }
}
