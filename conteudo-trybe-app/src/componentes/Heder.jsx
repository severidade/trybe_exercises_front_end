import React from 'react';
import Menu from './Menu';

class Heder extends React.Component {
  render() {
    return (
      <div className='menuSuperior'>
        <h1>Conteúdos de Front-End</h1>
        <Menu />
      </div>
    );
  }
}
export default Heder;