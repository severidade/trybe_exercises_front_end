import React from 'react';
import AlbumList from './componentes/AlbumList';
import UserProfile from './componentes/UserProfile';

import albums from './data/albums';
import users from './data/users';

import './App.css'

class App extends React.Component {
  render() {
    return (
      <article>
        <AlbumList albumsList={ albums } />
        <UserProfile user={ users[1] }/>
      </article>
    );
  }
}

export default App;