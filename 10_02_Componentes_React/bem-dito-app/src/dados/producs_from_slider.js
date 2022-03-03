import ModFem01 from '../img/modelos/modelo_feminino_01.jpg';
import ModFem02 from '../img/modelos/modelo_feminino_02.jpg';
import ModMasc01 from '../img/modelos/modelo_masculino_01.jpg';
import ModMasc02 from '../img/modelos/modelo_masculino_02.jpg';
import Sabonete from '../img/produtos/saboneteliquido.png';
import Desodorante from '../img/produtos/desodorante.png';
import Difusor from '../img/produtos/difusor.png';
import Hidratante from '../img/produtos/cremeHidratnte.png';

import GraficVideo from '../video/grafismos.mp4';

const Products = [
  {
    id: 1,
    product: 'Sabonete líquido',
    product_line: 'Linha banho',
    price: 39.60,
    highlight_info: 'Feito à mão para o cuidar da sua pele diáriamente.',
    product_info: 'Perfumes de PITANGA, exuberante e cítrico, também tem o de ALGAS que vai ter transportar para um pôr do sol na praia.',
    product_picture: Sabonete,
    model: ModFem01,
    video_bg: GraficVideo
  },
  {
    id: 2,
    product: 'Desodorante',
    product_line: 'Linha corpo',
    price: 20,
    highlight_info: 'No verão, surge a necessidade de reaplicar o desodorante ao decorrer do dia.',
    product_info: 'Aposte no Desodorante Bem.Dito que entrega hidratação e ação calmante para a pele, ao mesmo tempo que absorve a umidade excessiva sem ingredientes agressivos.',
    product_picture: Desodorante,
    model: ModMasc02,
    video_bg: GraficVideo
  },
  {
    id: 3,
    product: 'Difusores de ambiente',
    product_line: 'Linha Casa',
    price: 50,
    highlight_info: 'Aromaterapia em casa!',
    product_info: 'Os difusores de ambiente vão perfumar o seu lar com aromas marcantes. Tudo isso fica ainda mais potente se virar as varetas diariamente, assim elas proporcionam uma sensação de bem-estar e carinho por todos os ambientes.',
    product_picture: Difusor,
    model: ModFem02,
    video_bg: GraficVideo
  },
  {
    id: 4,
    product: 'Creme Hidratante',
    product_line: 'Linha corpo',
    price: 35,
    highlight_info: 'Ele está de volta!',
    product_info: 'Agora com cheirinho de amêndoas e extratos naturais de aloe vera, o Creme Hidratante em potinho de 100g é ideal para os cuidados com a sua pele no pós-banho. Ele espalha facilmente e fica com toque sequinho, vc já se cuidou hoje?',
    product_picture: Hidratante,
    model: ModMasc01,
    video_bg: GraficVideo
  }
];

export default Products;