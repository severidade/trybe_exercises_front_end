import React from 'react';

class Image extends React.Component {
  render() {
    return (
      <div className='container_exemplo'>
        <div className='container_titulo'>
          <h2>{this.props.font}</h2>
        </div>
        <div className='conteiner_image'>
          <img src={this.props.source} alt={this.props.alternativeText} />
        </div>
      </div>
    );
  }
}

export default Image;