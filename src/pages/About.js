import React from 'react';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section class="wrapper" id="main">
        <div id="about">
          <div class="splash"></div>
          <h1>Hey There!</h1>
          <div class="about-desc">
          <span class="greeting animate">I'm Dan</span>
          <p>
          I currently work as a front-end web developer in San Francisco, CA.
          I challenge myself to write elegant code as well as keep up with web tooling and best practices.
          When I am not telling pixels what to do, I enjoy rock climbing, hip hop dancing, getting lost in the city, finding the tastiest food, enjoying live music and becoming more of a morning person.
          </p>
          <img src="../img/profilepic.jpg"/>
          </div>
          <a href="#" class="contact-cta">Say Hi!</a>
        </div>
      </section>
    );
  }
}
