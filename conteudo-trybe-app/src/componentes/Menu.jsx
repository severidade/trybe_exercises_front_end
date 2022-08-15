import React from 'react';
import conteudos from '../data/conteudos';

class Menu extends React.Component {
  render() {
    return (
      <>
        <nav>
        <ul>
            {conteudos.map((elem) =>(
              <li key={elem.conteudo} >
                <a href= {`#${elem.id}`} > {`${elem.conteudo}`}</a> 
              </li>
            ))}
          </ul>
        </nav>
      </>
    );
  }
}
export default Menu;