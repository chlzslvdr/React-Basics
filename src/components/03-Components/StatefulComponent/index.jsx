import React from 'react';
import Header from '../StatelessComponent/Header';
import TableRow from './TableRow';

class StatefulComponent extends React.Component {
  state = {
    data: [
      {
        id: 1,
        name: 'Harry',
        age: '12',
      },
      {
        id: 2,
        name: 'Ron',
        age: '12',
      },
      {
        id: 3,
        name: 'Hermione',
        age: '12',
      },
    ],
  };

  render() {
    return (
      <div className='test-app'>
        <span className='title'>stateful component</span>
        <Header />
        <table>
          <tbody>
            {this.state.data.map((person, i) => (
              <TableRow key={i} data={person} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StatefulComponent;
