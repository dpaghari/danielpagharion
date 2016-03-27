import React from 'react';
// import Header from '../components/Header';
import Sidebar from "../components/Sidebar";
import NavBar from '../components/NavBar';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    return (
      <div class="site-wrapper">
        <div id="content">
          {this.props.children}
        </div>
        <Sidebar/>
      </div>
    );
  }
}
