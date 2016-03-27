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
        <img src="/img/danbrand.png" alt="Daniel Branding"/>
        <div class="social-media">
        <a href="https://www.facebook.com/daniel.pagharion"><i class="fa fa-facebook fa-lg"></i></a>
        <a href="https://www.instagram.com/dannypaguiao/"><i class="fa fa-instagram fa-lg"></i></a>
        <a href="https://www.twitter.com/dannypaguiao/"><i class="fa fa-twitter fa-lg"></i></a>
        <a href="https://www.github.com/dpaghari/"><i class="fa fa-github fa-lg"></i></a>
        </div>
        <h3>San Francisco, CA</h3>
        <img src="/img/sfbrand.png" alt="sfbrand"/>
        </div>
        <a href="#">Thanks to all the awesome people in my life.</a>
      </section>
    );
  }
}
