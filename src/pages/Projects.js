import React from 'react';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section class="wrapper">
        <div class="container">
          <h1>Projects</h1>
        </div>
        <div class="container row">
            <div class="project col-md-3">Playlistr</div>
            <div class="project col-md-3">Nocturnum</div>
            <div class="project col-md-3">Project Warp</div>
        </div>
      </section>
    );
  }
}
