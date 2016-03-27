import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    
  }

  render() {
    return (
      <div class="site-wrapper">
        <Header/>
        <div class="container" id="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
