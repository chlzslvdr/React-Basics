import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Sample/Routes/Navigation';
import Home from './Sample/Routes/Home';
import About from './Sample/Routes/About';
import Contact from './Sample/Routes/Contact';
import Landing from './Sample/Routes/LandingPage';
import * as ROUTES from './constant.routes';

const TestRoute = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route exact path={ROUTES.LANDING} component={Landing} />
      <Route path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.ABOUT} component={About} />
      <Route path={ROUTES.CONTACT} component={Contact} />
    </div>
  </Router>
);

export default TestRoute;
