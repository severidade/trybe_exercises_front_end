// /src/components/Album.js
import React from 'react';

class Album extends React.Component {
  render() {
    return (
      <section>
        <img src={ this.props.albu.image } alt={ this.props.albu.title } />
        <h2>{ this.props.albu.title }</h2>
        <p>{ this.props.albu.releaseDate.year }</p>
        <p>
          Lançamento:
          { `${ this.props.albu.releaseDate.day }/${ this.props.albu.releaseDate.month }/${ this.props.albu.releaseDate.year }` }
        </p>
        <p>Gravadora: { this.props.albu.others.recordCompany }</p>
        <p>Formatos: { this.props.albu.others.formats }</p>
      </section>
    );
  }
}

export default Album;