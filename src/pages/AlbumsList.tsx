import React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../store/reducers';
import { AlbumsState } from '../store/reducers/albumsReducer';
import { fetchAlbums } from '../store/action-creators';
import CardComponent from '../components/CardComponent';


interface Props {
  albums: AlbumsState
}

interface DispatchProps {
  fetchAlbums: () => void;
}

type AlbumListProps = Props & DispatchProps;

class AlbumsList extends React.Component<AlbumListProps> {
  componentDidMount() {
      this.props.fetchAlbums();
  }
  
  renderAlbums = () => {
      return this.props.albums.albums.map((album => {
        return <CardComponent {...album} key={album.id} />
      }));
      
  };

  
  render() {
    const { albums } = this.props.albums;
    if (albums) {
      if (albums.length > 0) {
        return (
          <div className="albums-list-container">
            <h1>Top 100 albums</h1>
            <ul className="albums-list row">
              {this.renderAlbums()}
            </ul>
          </div>
        );
       }
    }

   return <div>Loading...</div>;

  };
}

const mapStateToProps = (state: RootState ): Props => {
  
  return {
    albums: state.albumsState
  }
}

export default connect(mapStateToProps, { fetchAlbums })(AlbumsList);