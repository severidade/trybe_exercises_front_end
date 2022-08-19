import React from 'react';
import Image from './Image';
import cat from './img/cat.jpg'

import './App.css'

class App extends React.Component {

  render() {
    const url = "https://severidade.com.br/bhl/img/blog/floralretangular.jpg";
  
    return (
      <div className='conteiner'>
        <h1>Imagens como props</h1>
        <Image font="Arquivo de imagem importado do diretório" source={cat} alternativeText="Cute cat staring"/>
        <Image font="Imagem através de uma url" source={url} alternativeText="Cute cat staring"/>
      </div>
    );
  }
}
export default App;