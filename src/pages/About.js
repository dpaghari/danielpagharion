import React from 'react';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <section class="wrapper" id="main">
          <div class="container video-header">
            <video autoPlay="true" loop="true" muted="true">
              <source src="../img/dance.webm" type="video/webm"/>
            </video>
            <div class="video-overlay"></div>
          </div>
          <div id="about-desc">
          <h1>Just trying to help make the world a better place one line of code at a time...</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <img src="../img/profilepic.jpg"/>
          </div>
        </section>
    );
  }
}
