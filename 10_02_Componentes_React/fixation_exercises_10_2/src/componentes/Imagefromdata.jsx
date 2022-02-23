import React from 'react';

class Imagefromdata extends React.Component {
  render() {
    return <img className="prop-image" src={this.props.foto.source} alt={this.props.foto.alternativeText} />;
  }
}

export default Imagefromdata;