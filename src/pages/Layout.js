import React from 'react';
// import Header from '../components/Header';
import Sidebar from "../components/Sidebar";
import NavBar from '../components/NavBar';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    console.log(this.props.children);
    return (
      <div class="site-wrapper">
        <ReactCSSTransitionGroup
         component="section"
         transitionName="example"
         transitionEnterTimeout={500}
         transitionLeaveTimeout={500} id="content" key={this.props.location.pathname}>
         {this.props.children}
        </ReactCSSTransitionGroup>
        <Sidebar/>
      </div>
    );
  }
}
