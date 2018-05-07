import React, { Component } from 'react';
import Contador from './components/Contador/Contador.jsx';
import Calculadora from './components/Calculadora/Calculadora.jsx';


class App extends Component {
  render() {
    return (
      <div>
        <Calculadora valor={""} />
        
      </div>
    );
  }
}

export default App;
