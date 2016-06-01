import React from 'react';
import Header from '../components/Header';
// import Sidebar from "../components/Sidebar";
// import NavBar from '../components/NavBar';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="site-wrapper">
        <ReactCSSTransitionGroup
         component="section"
         transitionName="example"
         transitionEnterTimeout={300}
         transitionLeaveTimeout={300} id="content">
         <Header key="header"/>
         <div key={this.props.location.pathname}>
           {this.props.children}
         </div>
        </ReactCSSTransitionGroup>

      </div>
    );
  }
}
