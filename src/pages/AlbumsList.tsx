import React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../store/reducers';
import { Album } from '../entities';
//import { AlbumsState } from '../store/reducers/albumsReducer';
import { FiltersState } from '../store/reducers/filtersReducer';
import { fetchAlbums } from '../store/action-creators/albumsActions';
import CardComponent from '../components/CardComponent';
import PaginationComponent from '../components/PaginationComponent';
import { getVisibleAlbums }from '../filterSelectors/paginationFilters';


interface Props {
  albums: Album[];
  filters: FiltersState
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
    return this.props.albums.map(album => {
      return <CardComponent {...album} key={album.id} />
    });
      /*const { maxResultsPerPage, page } = this.props.filters;
      return this.props.albums.albums.splice(page, maxResultsPerPage)
          .map(album => {
                return <CardComponent {...album} key={album.id} />
          });*/
  };

  
  render() {
    const { albums } = this.props;
    if (albums) {
      if (albums.length > 0) {
        return (
          <div className="albums-list-container">
            <h1>Top 100 albums</h1>
            <ul className="albums-list row">
              {this.renderAlbums()}
            </ul>
            <PaginationComponent />
          </div>
        );
       }
    }

   return <div>Loading...</div>;
  };
}

const mapStateToProps = (state: RootState ): Props => {
  console.log(state.albumsState.albums);
  return {
    albums: getVisibleAlbums(state.albumsState.albums, state.filtersState.page, state.filtersState.maxResultsPerPage),
    filters: state.filtersState
  }
}

export default connect(mapStateToProps, { fetchAlbums })(AlbumsList);