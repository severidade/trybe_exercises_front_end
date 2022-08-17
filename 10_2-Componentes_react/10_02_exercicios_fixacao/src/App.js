import React from 'react';
import Image from './Image';
import cat from './img/cat.jpg'

import './App.css'

class App extends React.Component {

  render() {
    const url = "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg";
  
    return (
      <>
        <h1>Gatinho</h1>
        <Image font="Arquivo de imagem importado do diretório" source={cat} alternativeText="Cute cat staring"/>
        <Image font="Imagem através de uma url" source={url} alternativeText="Cute cat staring"/>
      </>
    );
  }
}
export default App;