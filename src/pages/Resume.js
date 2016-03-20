import React from 'react';

export default class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <section id="resume-section" class="container">
          <h2>Daniel Pagharion</h2>
          <div class="row">
          <h3>Profile</h3>
          </div>
          <div class="row">
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
          <div class="row">
          <h3>Education</h3>
          <h4>University of California at Santa Cruz</h4><span>2015</span>
          <h5>Computer Science: Computer Game Design B.S</h5>
          <ul>
            <li>Learned fundmamentals of writing code and best practices</li>
            <li>Worked on several projects in a team setting including a Project Lead Role for senior exit project</li>
            <li>Worked as a grader and tutor for a computer game design course</li>
          </ul>
          </div>
          <div class="row">
          <h3>Technical Skillset</h3>
          <h4>Languages</h4>
          <ul>
            <li>Javascript</li>
            <li>PHP</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>mySQL</li>
            <li>C#</li>
            <li>C++</li>
            <li>Java</li>
          </ul>
          <h4>Development</h4>
          <ul>
            <li>ReactJS</li>
            <li>Angular</li>
            <li>NPM</li>
            <li>Gulp</li>
            <li>Sass/Less</li>
            <li>Webpack</li>
            <li>Browserify</li>
            <li>ES6</li>
            <li>Bower</li>
            <li>AJAX</li>
            <li>Wordpress</li>
          </ul>
          <h4>Tools</h4>
          <ul>
            <li>Atom</li>
            <li>Sublime Text</li>
            <li>Adobe Creative Suite</li>
            <li>Filezilla</li>
            <li>Git/SVN</li>
            <li>Windows</li>
            <li>Linux</li>
          </ul>
          </div>
        </section>
    );
  }
}
