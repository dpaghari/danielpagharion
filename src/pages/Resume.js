import React from 'react';

export default class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <section id="resume-section" class="wrapper container">
          <div class="introduction">
          <h2>Daniel Pagharion</h2>
          <p>dspagharion@gmail.com</p>
          <p>danielpagharion.com</p>
          </div>
          <div class="row resume-row">
          <h3>Profile</h3>
          <p>Excited to be looking for an opportunity to work on something that impacts the lives of countless people on a day to day basis.</p>
          </div>
          <div class="row resume-row">
          <h3>Professional Experience</h3>
          <h4>Front-End Web Developer</h4><span> May 2015 - Present </span>
          <h5>Tightrope Interactive Inc.</h5>
          <ul>
            <li>Maintained a Wordpress plugin for eCommerce site</li>
            <li>Created branded browser extensions</li>
            <li>Designed and hand coded landing pages</li>
            <li>Collaborated with designers to tackle design problems</li>
            <li>Designed and tested user experience with flows and prototypes</li>
            <li>Underwent code reviews and worked with designers and QA team</li>
          </ul>
          </div>
          <div class="row resume-row">
          <h3>Education</h3>
          <h4>University of California at Santa Cruz</h4><span>2015</span>
          <h5>Computer Science: Computer Game Design B.S</h5>
          <ul>
            <li>Learned fundmamentals of writing code and best practices</li>
            <li>Worked on several projects in a team setting including a Project Lead Role for senior exit project</li>
            <li>Worked as a grader and tutor for a computer game design course</li>
          </ul>
          </div>
          <div class="row technical-section">
          <h3>Technical Skillset</h3>
          <div class="list-wrapper row">
          <ul class="col-md-4">
          <h4>Languages</h4>
            <li><i class="fa fa-circle-o"></i>Javascript</li>
            <li><i class="fa fa-circle-o"></i>PHP</li>
            <li><i class="fa fa-circle-o"></i>HTML5</li>
            <li><i class="fa fa-circle-o"></i>CSS3</li>
            <li><i class="fa fa-circle-o"></i>mySQL</li>
            <li><i class="fa fa-circle-o"></i>C#</li>
            <li><i class="fa fa-circle-o"></i>C++</li>
            <li><i class="fa fa-circle-o"></i>Java</li>
          </ul>
          <ul class="col-md-4">
          <h4>Web Development</h4>
            <li><i class="fa fa-circle-o"></i>ReactJS</li>
            <li><i class="fa fa-circle-o"></i>Angular</li>
            <li><i class="fa fa-circle-o"></i>NPM</li>
            <li><i class="fa fa-circle-o"></i>Gulp</li>
            <li><i class="fa fa-circle-o"></i>Sass/Less</li>
            <li><i class="fa fa-circle-o"></i>Webpack</li>
            <li><i class="fa fa-circle-o"></i>Browserify</li>
            <li><i class="fa fa-circle-o"></i>ES6</li>
            <li><i class="fa fa-circle-o"></i>Bower</li>
            <li><i class="fa fa-circle-o"></i>AJAX</li>
            <li><i class="fa fa-circle-o"></i>Wordpress</li>
          </ul>
          <ul class="col-md-4">
          <h4>Tools</h4>
            <li><i class="fa fa-circle-o"></i>Atom</li>
            <li><i class="fa fa-circle-o"></i>Sublime Text</li>
            <li><i class="fa fa-circle-o"></i>Adobe Creative Suite</li>
            <li><i class="fa fa-circle-o"></i>Filezilla</li>
            <li><i class="fa fa-circle-o"></i>Git/SVN</li>
            <li><i class="fa fa-circle-o"></i>Windows</li>
            <li><i class="fa fa-circle-o"></i>Linux</li>
          </ul>
            </div>
          </div>
        </section>
    );
  }
}
