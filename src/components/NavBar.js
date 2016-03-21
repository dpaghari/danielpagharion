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
            <div class="nav-links">
            <Link to="/"><i class="fa fa-user"></i>About</Link>
            <Link to="projects"><i class="fa fa-folder"></i>Projects</Link>
            <Link to="contact"><i class="fa fa-envelope"></i>Contact Me</Link>
            <Link to="resume"><i class="fa fa-file-text"></i>Resume</Link>
            <a class="menu-btn" href="" onClick={this.toggleActive.bind(this)}><i class="fa fa-bars"></i></a>
            </div>
          </nav>
      );
    }
    else {
      return (
          <nav id="site-nav">
            <div class="nav-links">
            <Link to="/"><i class="fa fa-user"></i>About</Link>
            <Link to="projects"><i class="fa fa-folder"></i>Projects</Link>
            <Link to="contact"><i class="fa fa-envelope"></i>Contact Me</Link>
            <Link to="resume"><i class="fa fa-file-text"></i>Resume</Link>
            <a class="menu-btn" href="" onClick={this.toggleActive.bind(this)}><i class="fa fa-bars"></i></a>
            </div>
          </nav>
      );
    }
  }

  toggleActive(e) {
    e.preventDefault();
    var currState = !this.state.active;
    this.setState({ active: currState });
  }
}
