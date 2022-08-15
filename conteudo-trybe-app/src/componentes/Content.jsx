import React from 'react';
import conteudos from '../data/conteudos';

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