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
            <div class="photo-lockup">
              <img src="../img/profilepic.jpg"/>
            </div>
            <div class="about-desc">
              <h1>Hey There! I'm Dan</h1>
              <p>
              I am currently a <span style={{color: "orange"}}>Front-End Web Developer</span> in San Francisco, CA.
              </p>
            </div>
          </div>
        </section>
    );
  }
}
