import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from 'pages/Layout';
import About from 'pages/About';
import Contact from 'pages/Contact';
import Projects from 'pages/Projects';
import Hobbies from 'pages/Hobbies';

render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={About}></IndexRoute>
      <Route path="contact" component={Contact}/>
      <Route path="hobbies" component={Hobbies}/>
      <Route path="projects" component={Projects}/>
    </Route>
  </Router>,
  document.getElementById('app'));
