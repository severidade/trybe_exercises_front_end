// arquivo UserProfile.js
import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    
    const usuarios = this.props.userList;

    return (
      <div className='containerUsuario'>
        <h1>Listando usuários</h1>
        {usuarios.map((usuario) => (
          <div key={usuario.id} className="user">
            <Image source={usuario.avatar} alternativeText="User avatar" />
            <h2> {usuario.name} </h2>
            <p> {usuario.email} </p>
          </div>
        ))}
      </div>
    );
  }
}

export default UserProfile;