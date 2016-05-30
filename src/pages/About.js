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
          <div class="about-desc">
          <p>
          I currently work as a front-end web developer in San Francisco, CA.
          I challenge myself to write elegant code as well as to keep up with the latest in web tooling and best practices.
          When I am not telling pixels what to do, I enjoy rock climbing, <a href="https://www.youtube.com/playlist?list=PLHJU8dnZzNBDyFVL2Tnqm0cxjVYpKX-KC" class="about-link">hip hop dancing</a>, getting lost in the city, finding the tastiest food, enjoying live music and becoming more of a morning person.
          </p>
          </div>
            <a href="#/contact" class="contact-cta"><span>Say Hi!</span><i class="fa fa-envelope-o fa-fw"></i></a>
        </div>
      </section>
    );
  }
}
