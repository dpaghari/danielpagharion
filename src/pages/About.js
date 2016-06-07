import React from 'react';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // console.log(this.props.location.pathname);
  }

  render() {
    return (
      <section class="wrapper" id="main">
        <div id="about">
          <div class="about-desc">
          <p>
          I currently work as a front-end web developer in San Francisco, CA.
          I challenge myself to write elegant code, as well as to keep up with the latest in web tooling and best practices.
          When I am not bossing pixels around, I enjoy rock climbing, <a href="https://www.youtube.com/playlist?list=PLHJU8dnZzNBDyFVL2Tnqm0cxjVYpKX-KC" target="_blank" class="about-link">hip hop dancing</a>, getting lost in the city, finding the tastiest food, listening to live music and becoming more of a morning person.
          </p>
          <div>
            <a href="#" class="social"><i class="fa fa-twitter fa-fw"></i></a>
            <a href="#" class="social"><i class="fa fa-github fa-fw"></i></a>
          </div>
          </div>
            <a href="#/contact" class="contact-cta"><span>Say Hi!</span><i class="fa fa-envelope fa-fw"></i></a>
        </div>
      </section>
    );
  }
}
