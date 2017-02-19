import React from 'react';
import Project from '../components/Project.js'

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasProjects: false
    };
    this.projectsList = [];
  }

  componentWillMount() {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "../../public/projects.json");
    xhr.onreadystatechange = function () {
      if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        this.projectsList = JSON.parse(xhr.responseText);
        this.setState({hasProjects: true});
      }
    }.bind(this);
    xhr.send();
  }

  render() {
    
    if(this.state.hasProjects){

      return (
        <section class="projects-wrapper">
          <ul class="projects">
            {this.renderProjects()}
          </ul>
        </section>
      );
    }
    else {
      return null;
    }
  }

  renderProjects() {
    return this.projectsList.map((el, idx) => <Project {...el} key={idx}/>);
  }
}
