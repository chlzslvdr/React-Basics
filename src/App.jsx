import React from 'react';
// import JSX from './Sample/JSX/usingJSX';   //to test other samples, change path
// import Components from './Sample/Components/CallingAComponent';
// import State from './Sample/State';
// import Props from './Sample/Props/PropsValidation';
// import ComponentAPIsAndLifeCycle from './Sample/ComponentAPIsAndLifeCycle/LifeCycles';
// import Forms from './Sample/Forms/ComplexForm';
import Events from './Sample/Events/UsingEvents';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <JSX/> */}
        {/* <Components /> */}
        {/* <State /> */}
        {/* <Props /> */}
        {/* <ComponentAPIsAndLifeCycle /> */}
        {/* <Forms /> */}
        <Events />
      </div>
    );
  }
}

export default App;
