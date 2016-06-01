import React from 'react';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section class="wrapper projects">
        <div class="projects-wrapper">
          <div class="project">
            <a class="project-title" href="#"><i class="fa fa-thumb-tack fa-fw"></i>danielpagharion.com</a>
            <div class="project-details">
              <p>Portfolio website implemented and designed using ReactJS and Sass. Managed using npm and git.</p>
                <a href="#"><img src="../img/screenshots/portfolio.png"/></a>
            </div>
          </div>
          <div class="project">
            <a class="project-title" href="#"><i class="fa fa-thumb-tack fa-fw"></i>Newtab Nuevo</a>
            <div class="project-details">
              <p>Opinionated New Tab Chrome Extension to afford users extra functionality when they open a new tab on the Chrome Web Browser.</p>

                <a href="#"><img src="../img/screenshots/newtabnuevo.jpg"/></a>

            </div>
          </div>
          <div class="project">
            <a class="project-title" href="http://wikideals.com/"><i class="fa fa-thumb-tack fa-fw"></i>Wikideals.com</a>
            <div class="project-details">
              <p>Consumer Goods website that aggregates price listings from merchants and manufacturers and acts as an effective price comparison tool.  Displayed product information on a page in an elegant yet familiar way.</p>

              <a href="http://wikideals.com/"><img src="../img/screenshots/wikideals.jpg"/></a>

            </div>
          </div>
          <div class="project">
            <a class="project-title" href="http://smashlounge.com/"><i class="fa fa-thumb-tack fa-fw"></i>Smashlounge.com</a>
            <div class="project-details">
              <p>Aggregates frame data for the various characters and presents it in an intuitive way.  Helped with Front End Design and Development as well as test new features. </p>

              <a href="http://smashlounge.com/"><img src="../img/screenshots/smashlounge.jpg"/></a>

            </div>
          </div>
          <div class="project">
            <a class="project-title" href="http://driving.directions.cm/lp/"><i class="fa fa-thumb-tack fa-fw"></i>Directions.cm</a>
            <div class="project-details">
              <p>Driving directions website implemented using ReactJS and Google Maps and Places API.</p>

                <a href="http://driving.directions.cm/lp/"><img src="../img/screenshots/directionscm.jpg"/></a>

            </div>
          </div>
          <div class="project">
            <a class="project-title" href="https://www.dropbox.com/s/j4ygmaf8her6dr0/Nocturnum7.4.7z?dl=0"><i class="fa fa-thumb-tack fa-fw"></i>Nocturnum</a>
            <div class="project-details">
              <p>Senior exit game project, created using Unity3D over a span of 6 months.  Acted as project lead and worked on gameplay programming, game design, project management and recruiting artists.  Awarded with Design Innovation and Audio Award at Annual Game Design Senior Exit Project Showcase.</p>

                <a href="https://www.dropbox.com/s/j4ygmaf8her6dr0/Nocturnum7.4.7z?dl=0"><img src="../img/screenshots/nocturnum.png"/></a>

            </div>
          </div>
          <div class="project">
            <a class="project-title" href="http://danielpagharion.com/project_warp/"><i class="fa fa-thumb-tack fa-fw"></i>Project Warp</a>
            <div class="project-details">
              <p>First Game created using an HTML5 Framework powered by MelonJS. Acted as lead gameplay programmer. Awarded with Peer Choice Award. </p>

                <a href="http://danielpagharion.com/project_warp/"><img src="../img/screenshots/projectwarp.png"/></a>

            </div>
          </div>
        </div>
      </section>
    );
  }
}
