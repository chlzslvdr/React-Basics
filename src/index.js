import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Routes from './Routes';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Routes />, document.getElementById('root'));

// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(document.getElementById('root'));
// }, 12000);  //for Life Cycles (to test componentWillUnmount)

serviceWorker.unregister();
