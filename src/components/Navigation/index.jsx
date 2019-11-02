import React from 'react';
import '../../common/css/navigation.scss';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../common/constants/routes';

const App = () => (
  <div className='navigation-section'>
    <div className='jsx-container'>
      <ul>
        <li>
          <Link to={ROUTES.JSX}>JSX</Link>
        </li>
        <li>
          <Link to={ROUTES.NESTED_ELEMENTS}>NESTED ELEMENTS</Link>
        </li>
        <li>
          <Link to={ROUTES.JS}>JS EXPRESSIONS</Link>
        </li>
        <li>
          <Link to={ROUTES.TERNARY}>TERNARY EXPRESSIONS</Link>
        </li>
        <li>
          <Link to={ROUTES.STYLING}>STYLING</Link>
        </li>
      </ul>
    </div>

    <div className='components-container'>
      <ul>
        <li>
          <Link to={ROUTES.STATELESS}>STATELESS COMPONENT</Link>
        </li>
        <li>
          <Link to={ROUTES.STATEFUL}>STATEFUL COMPONENT</Link>
        </li>
        <li>
          <Link to={ROUTES.CALLING_A_COMPONENT}>CALLING A COMPONENT</Link>
        </li>
      </ul>
    </div>

    <div className='state-container'>
      <ul>
        <li>
          <Link to={ROUTES.STATE}>STATE</Link>
        </li>
      </ul>
    </div>

    <div className='props-container'>
      <ul>
        <li>
          <Link to={ROUTES.PROPS}>PROPS</Link>
        </li>
        <li>
          <Link to={ROUTES.DEFAULT_PROPS}>DEFAULT PROPS</Link>
        </li>
        <li>
          <Link to={ROUTES.STATE_AND_PROPS}>STATE AND PROPS</Link>
        </li>
        <li>
          <Link to={ROUTES.PROPS_VALIDATION}>PROPS VALIDATION</Link>
        </li>
      </ul>
    </div>

    <div className='lifecycles-container'>
      <ul>
        <li>
          <Link to={ROUTES.LIFE_CYCLES}>LIFE CYCLES</Link>
        </li>
        <li>
          <Link to={ROUTES.SET_STATE}>SET STATE</Link>
        </li>
      </ul>
    </div>

    <div className='forms-container'>
      <ul>
        <li>
          <Link to={ROUTES.FORMS}>FORMS</Link>
        </li>
        <li>
          <Link to={ROUTES.COMPLEX_FORMS}>COMPLEX FORMS</Link>
        </li>
      </ul>
    </div>

    <div className='events-container'>
      <ul>
        <li>
          <Link to={ROUTES.EVENTS}>EVENTS</Link>
        </li>
        <li>
          <Link to={ROUTES.CHILD_EVENTS}>CHILD EVENTS</Link>
        </li>
      </ul>
    </div>

    <div className='key-container'>
      <ul>
        <li>
          <Link to={ROUTES.KEYS}>KEYS</Link>
        </li>
      </ul>
    </div>

    <div className='hoc-container'>
      <ul>
        <li>
          <Link to={ROUTES.HOC}>HOC</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default App;
