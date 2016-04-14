import React from 'react';
import { Link } from 'react-router';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <section id="sidebar">
        <div class="sidebar-content">
          <Link to="/"><h1>Daniel Pagharion</h1></Link>
          <h2>Web Developer</h2>
          <div class="sidebar-nav">
            <Link to="/projects" class="sidebar-nav-item"><span>Stuff I worked on</span></Link>
            <Link to="/hobbies" class="sidebar-nav-item"><span>My Favorite Things</span></Link>
            <Link to="/" class="sidebar-nav-item"><span>My Thoughts on Things</span></Link>
            <Link to="/contact" class="sidebar-nav-item"><span>Get in Touch</span></Link>
          </div>
          <Link to="/"><img id="danbrand" src="/img/danbrand.png" alt="Daniel Branding"/></Link>
          <div class="social-media">
            <a href="https://www.facebook.com/daniel.pagharion"><i class="fa fa-facebook fa-lg"></i></a>
            <a href="https://www.instagram.com/dannypaguiao/"><i class="fa fa-instagram fa-lg"></i></a>
            <a href="https://www.twitter.com/dannypaguiao/"><i class="fa fa-twitter fa-lg"></i></a>
            <a href="https://www.github.com/dpaghari/"><i class="fa fa-github fa-lg"></i></a>
          </div>
          <img id="sfbrand" src="/img/sfbrand.png" alt="sfbrand"/>
          <h3>San Francisco, CA</h3>
        </div>
      </section>
    );
  }
}
