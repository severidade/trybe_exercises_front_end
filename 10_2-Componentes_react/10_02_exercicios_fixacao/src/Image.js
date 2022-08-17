import React from 'react';

class Image extends React.Component {
  render() {
    return (
      <>
        <h2>{this.props.font}</h2>
        <div className='conteiner_image'>
          <img src={this.props.source} alt={this.props.alternativeText} />
        </div>
      </>
    );
  }
}

export default Image;