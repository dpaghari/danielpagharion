import React from 'react';
import NavBar from '../components/NavBar';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="site-wrapper">
      <h1>Daniel Pagharion</h1>
      <h2>Web Developer</h2>
        <NavBar/>
        <div class="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
