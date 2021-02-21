import React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../store/reducers';
import { Album } from '../entities';
import { RouteComponentProps } from 'react-router';
import NotFound from './NotFound';

interface Props {
    selectedAlbum?: Album
}

interface MatchParams {
    id: string;
}

type AlbumsDetailProps = Props & MatchParams & RouteComponentProps<MatchParams>;

const AlbumsDetail: React.FC<AlbumsDetailProps> = (props) => {
    const album = props.selectedAlbum;
    console.log(album);
    if (album) {
        return (
            <div className="albums-detail">
                <img src={album.image} alt={album.title} />
                <div className="text-container">
                    <h1>{album.title}</h1>
                    <h2>By {album.artist.name}</h2>
                    <p>Number {album.index} on iTunes</p>
                    <p>Released in {album.releaseDate}</p>
                    <p>{album.numberOfItems} songs</p>
                    <p>Price in iTunes: {album.price}</p>
                    <p>{album.rights}</p> 
                </div>
            </div>
        )
    }
    return <NotFound {...props}/>;
       
};

const mapStateToProps = (state: RootState, props: RouteComponentProps<MatchParams>):Props => {
    return {
        selectedAlbum: state.albumsState.albums.find(album => album.id === props.match.params.id)
    }
}

export default connect(mapStateToProps, null)(AlbumsDetail);