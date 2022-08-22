import React from 'react';
import AlbumList from './componentes/AlbumList';
import UserProfile from './componentes/UserProfile';
import Order from './componentes/Order';

import albums from './data/albums';
import users from './data/users';
import orders from './data/orders'

import './App.css'

class App extends React.Component {
  render() {
    return (
      <article>
        <AlbumList albumsList={ albums } />
        <UserProfile userList={ users }/>
        <Order orderList={ orders }/>
      </article>
    );
  }
}

export default App;