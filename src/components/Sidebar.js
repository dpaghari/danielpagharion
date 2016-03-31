import React from 'react';

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
        <h1>Daniel Pagharion</h1>
        <h2>Web Developer</h2>
        <img id="danbrand" src="/img/danbrand.png" alt="Daniel Branding"/>
        <div class="social-media">
        <a href="https://www.facebook.com/daniel.pagharion"><i class="fa fa-facebook fa-lg"></i></a>
        <a href="https://www.instagram.com/dannypaguiao/"><i class="fa fa-instagram fa-lg"></i></a>
        <a href="https://www.twitter.com/dannypaguiao/"><i class="fa fa-twitter fa-lg"></i></a>
        <a href="https://www.github.com/dpaghari/"><i class="fa fa-github fa-lg"></i></a>
        </div>
        <img id="sfbrand" src="/img/sfbrand.png" alt="sfbrand"/>
        <h3>San Francisco, CA</h3>
        <a href="#" id="contact-me-cta">Say Hi</a>


        </div>
      </section>
    );
  }
}
