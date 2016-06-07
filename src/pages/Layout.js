import React from 'react';
import Header from '../components/Header';
// import Sidebar from "../components/Sidebar";
// import NavBar from '../components/NavBar';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactCSSTransitionReplace from "react-css-transition-replace";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div class="site-wrapper">

        <Header/>
        <ReactCSSTransitionReplace
         component="section"
         transitionName="fade-wait"
         transitionEnterTimeout={1000} transitionLeaveTimeout={2000}
          id="content">
         <div key={this.props.location.pathname}>
           {this.props.children}
         </div>
        </ReactCSSTransitionReplace>
        
      </div>

    );
  }
}
