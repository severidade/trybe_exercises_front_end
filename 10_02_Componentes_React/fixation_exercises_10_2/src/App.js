import React from 'react';
import './App.css';
import Image from './componentes/Image';
import Imagefromdata from './componentes/Imagefromdata';
import Album from './componentes/Album';
import UserProfile from './componentes/UserProfile';
import Order from './componentes/Order';

import LocalImage from './img/papete.jpg';

class App extends React.Component {
  render() {

    // Declaração um objeto contendo uma imagem
    const foto01 = {
      source: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",
      alternativeText: "Cute cat staring"
    };

    // Declaração do objeto contendo informações do album01
    const album01 = {
      image: 'https://www.vagalume.com.br/coldplay/discografia/mylo-xyloto.webp',
      title: 'Mylo Xyloto',
      releaseDate: {
        year: '2011',
        month: '10',
        day: '24',
      },
      others: {
        recordCompany: 'Capitol, Parlophone',
        formats: 'CD, digital'
      }
    };

    // Declaração do objeto contendo informações do album02
    const album02 = {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
      title: 'Ghost Stories',
      releaseDate: {
        year: '2014',
        month: '05',
        day: '16',
      },
      others: {
        recordCompany: 'Parlophone',
        formats: 'CD, digital'
      }
    };

    // Declaracao de um objeto contendo as informacoes de usuario
    const joao = {
      id: 102,
      name: "João",
      email: "joao@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    };

    const amelia = {
      id: 77,
      name: "Amélia",
      email: "amelia@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    };

    // Objetos declarados
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };

    return (
      <div>
        <div className="exercise">
          <h1>Exercício inicial sobre o uso de componetnes</h1>
          <p> Passando a imagem como Props a partir de uma URL externa (arquivo hospedado na Web)</p>
            <Image 
              source = "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"
              alternativeText = "Cute cat staring"
            />
          
          <p>Passar a imagem como props de um arquivo local</p>
          <Image
            source = {LocalImage}
            alternativeText = "Papete"
          />

          <p>Passando a imagem como props através de um objeto dentro da classe</p>
          <Imagefromdata foto ={ foto01 } />

        </div>

        <div className="exercise">
          <h1>Composição de Componentes</h1>
          <div className="discos">
            <Album album = { album01 } />
            <Album album = { album02 } />
          </div>
        </div>

        <div className="exercise">
          <h1>Reutilização do componente image dentro do componente UserProfile </h1>
          <p>O conteudo do avatar e passado do componente App.js para um componente interno</p>
          < UserProfile user = { joao }/>
          < UserProfile user = { amelia } />
        </div> 

        <div className="exercise">
          <h2> Pedidos</h2>
          <p> Este exemplo é muito bom pois ele desestrutura o objeto enviado dentro do componente</p>
          <code><p>ofodf</p></code>
          <ul>
            < Order order = { headphone } />
            < Order order = { energyDrink } />
          </ul>
        </div> 
      </div>
    );
  }
}

export default App;
