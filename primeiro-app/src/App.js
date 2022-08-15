import React from 'react';
import About from './components/About';
import Tarefas from './components/Tarefas';

class App extends React.Component {
  render() {
    return (
      <>
        <About />
        <Tarefas />
      </>
    );
  }
}

export default App;