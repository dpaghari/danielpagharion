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
          <Link to="/"><h1>Daniel Pagharion</h1></Link>
          <Link to="/"><img id="danbrand" src="/img/danbrand.png" alt="Daniel Branding"/></Link>
          <div class="sidebar-nav">
            <Link to="/projects" class="sidebar-nav-item"><span>Stuff I worked on</span></Link>
            <Link to="/contact" class="sidebar-nav-item"><span>Get in Touch</span></Link>
          </div>
          <div class="social-media">
            <a target="_blank" href="https://www.github.com/dpaghari/"><i class="fa fa-github fa-lg"></i></a>
            <Link to="/resume"><i class="fa fa-file-text fa-lg"></i></Link>
          </div>
          <img id="sfbrand" src="/img/sfbrand.png" alt="sfbrand"/>
          <h3>San Francisco, CA</h3>
      </section>
    );
  }
}
