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
            <Link to="/projects" class="sidebar-nav-item"><span>Work</span></Link>
            <Link to="/contact" class="sidebar-nav-item"><span>Get in Touch</span></Link>
          </div>
          <div class="social-media">
            <a target="_blank" href="https://www.github.com/dpaghari/"><i class="fa fa-github fa-lg"></i></a>
            <a href="/assets/Resume.pdf"><i class="fa fa-file-text fa-lg"></i></a>
          </div>
          <img id="sfbrand" src="/img/sfcity.png" alt="sfbrand"/>
      </section>
    );
  }
}
