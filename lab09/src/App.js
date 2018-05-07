import React, { Component } from 'react';
import Contador from './components/Contador/Contador.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Contador valor={7} />
        <hr />
        <Contador valor={0}  />

      </div>
    );
  }
}

export default App;
