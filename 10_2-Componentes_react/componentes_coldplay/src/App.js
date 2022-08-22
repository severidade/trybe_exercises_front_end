import React from 'react';
import AlbumList from './componentes/AlbumList';
import albums from './data/albums';

import './App.css'

class App extends React.Component {
  render() {
    return (
      <article>
        <AlbumList albumsList={ albums } />
      </article>
    );
  }
}

export default App;