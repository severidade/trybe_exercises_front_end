import React from "react";
// import albums from '../data/albums'

class AlbumList extends React.Component {
  render(){

    const albums = this.props.albumsList

    return (
       <div className="conteinerAlbumList">
        <h1>Criando componentes em React</h1>
        <div className="cards">
          {albums.map((album)=> (
            <div key={album.id} className="album">
              <div className="conteiner_image">
                <img src={album.image } alt={ album.title } />
              </div>
              <h2>{ album.title }</h2>
              <p>{ album.releaseDate.year }</p>
              <p>
                Lançamento:
                { `${ album.releaseDate.day }/${ album.releaseDate.month }/${ album.releaseDate.year }` }
              </p>
              <p>Gravadora: { album.others.recordCompany }</p>
              <p>Formatos: { album.others.formats }</p>
            </div>
          ))}
        </div>
       </div>
    )
  }
}

export default AlbumList;