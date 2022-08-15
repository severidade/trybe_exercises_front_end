import React from 'react';

const conteudos = [
  {
    id: '1',
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    id: '2',
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    id: '3',
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    id: '4',
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          {conteudos.map((elem) => (
            <div key={elem.conteudo} className="card" id={elem.id}>
              <h4>{`O conteudo é: ${elem.conteudo}`}</h4>
              <p>{`status: ${elem.status}`}</p>
              <p>{`bloco: ${elem.bloco}`}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default Content;