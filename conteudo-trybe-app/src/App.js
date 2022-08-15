import React from 'react';
import Content from './componentes/Content';
import Footer from './componentes/Footer';
import Heder from './componentes/Heder';

import './App.css'

class App extends React.Component {
  render() {
    return (
      <>
        <Heder />
        <Content />
        <Footer />
      </>
    );
  }
}
export default App;