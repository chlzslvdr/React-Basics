import React from 'react';
import './style.scss';
// import JSX from './Sample/02-JSX/Styling'; //to test other samples, change path
// import Components from './Sample/03-Components/CallingAComponent';
// import State from './Sample/04-State';
// import Props from './Sample/05-Props/PropsValidation';
// import ComponentAPIsAndLifeCycle from './Sample/06-ComponentAPIsAndLifeCycle/LifeCycles';
// import Forms from './Sample/07-Forms/ComplexForm';
// import Events from './Sample/08-Events/ChildEvents';
// import Keys from './Sample/09-Keys';
import HOC from './Sample/11-HOC';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <JSX /> */}
        {/* <Components /> */}
        {/* <State /> */}
        {/* <Props /> */}
        {/* <ComponentAPIsAndLifeCycle /> */}
        {/* <Forms /> */}
        {/* <Events /> */}
        {/* <Keys /> */}
        <HOC />
      </div>
    );
  }
}

export default App;
