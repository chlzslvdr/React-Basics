import React from 'react';
import '../../common/css/main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation';

import JSX from '../02-JSX/usingJSX';
import Nested from '../02-JSX/nestedElements';
import JS from '../02-JSX/javascriptExpression';
import Ternary from '../02-JSX/ternaryExpression';
import Styling from '../02-JSX/Styling';

import Stateless from '../03-Components/StatelessComponent';
import Stateful from '../03-Components/StatefulComponent';
import Calling from '../03-Components/CallingAComponent';

import State from '../04-State';

import Props from '../05-Props/UsingProps';
import DefaultProps from '../05-Props/DefaultProps';
import StateAndProps from '../05-Props/StateAndProps';
import PropsValidation from '../05-Props/PropsValidation';

import LifeCycles from '../06-ComponentLifecycles/LifeCycles';
import SetState from '../06-ComponentLifecycles/SetState';

import Forms from '../07-Forms/UsingForms';
import ComplexForms from '../07-Forms/ComplexForm';

import Events from '../08-Events/UsingEvents';
import ChildEvents from '../08-Events/ChildEvents';

import Keys from '../09-Keys';

import HOC from '../11-HOC';

import Landing from '../LandingPage';
import * as ROUTES from '../../common/constants/routes';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Switch>
        <Route exact path={ROUTES.LANDING} component={Landing} />
        <Route path={ROUTES.JSX} component={JSX} />
        <Route path={ROUTES.NESTED_ELEMENTS} component={Nested} />
        <Route path={ROUTES.JS} component={JS} />
        <Route path={ROUTES.TERNARY} component={Ternary} />
        <Route path={ROUTES.STYLING} component={Styling} />

        <Route path={ROUTES.STATELESS} component={Stateless} />
        <Route path={ROUTES.STATEFUL} component={Stateful} />
        <Route path={ROUTES.CALLING_A_COMPONENT} component={Calling} />

        <Route path={ROUTES.STATE} component={State} />

        <Route path={ROUTES.PROPS} component={Props} />
        <Route path={ROUTES.DEFAULT_PROPS} component={DefaultProps} />
        <Route path={ROUTES.STATE_AND_PROPS} component={StateAndProps} />
        <Route path={ROUTES.PROPS_VALIDATION} component={PropsValidation} />

        <Route path={ROUTES.SET_STATE} component={SetState} />
        <Route path={ROUTES.LIFE_CYCLES} component={LifeCycles} />

        <Route path={ROUTES.FORMS} component={Forms} />
        <Route path={ROUTES.COMPLEX_FORMS} component={ComplexForms} />

        <Route path={ROUTES.EVENTS} component={Events} />
        <Route path={ROUTES.CHILD_EVENTS} component={ChildEvents} />

        <Route path={ROUTES.KEYS} component={Keys} />

        <Route path={ROUTES.HOC} component={HOC} />
      </Switch>
    </div>
  </Router>
);

export default App;
