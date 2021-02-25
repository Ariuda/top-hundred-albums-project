import React from 'react';
import { connect } from 'react-redux';

import { updateFavorite } from '../store/action-creators/albumsActions';
import { Album } from '../entities';
import ButtonComponent from './ButtonComponent';
import { limitCharacters } from '../helpers/helpers';
import { Link } from 'react-router-dom';

interface Props {
    updateFavorite: (id: string) => void;
}

type CardComponentProps = Album & Props;

export const CardComponent: React.FC<CardComponentProps> = ({ image, title, artist, category, index, id, link, favorite, updateFavorite }) => {
    const formattedTitle = limitCharacters(title);
    const formattedArtistName = limitCharacters(artist.name);

    const renderArtistName = () => {
        if (artist.link) {
            return <a href={artist.link} target="_blank" rel="noreferrer" className="artist-name">{formattedArtistName}</a>
        }
        return <p className="artist-name">{formattedArtistName}</p>;
    };

    const renderFavoriteIcon = () => {
        if(favorite) {
            return <i className="small material-icons">favorite</i>;
        }
        return <i className="small material-icons">favorite_border</i>;
    };

    return (
        <li className="card-container col-xl-4 col-lg-6 col-md-12">
            <div className="card">
                <div className="card-top-row row">
                    <div className="col-6">
                        <a href={category.link} target="_blank" rel="noreferrer">{category.name}</a>
                    </div>
                    <div className="col-6">
                        Top #{index}
                        <div className="favorite-icon" onClick={(e) => updateFavorite(id)}>
                            {renderFavoriteIcon()}
                        </div>
                    </div>
                </div>
                <div className="card-second-row">
                    <img src={image} alt={title} />
                    <div className="card-text">
                        <p className="album-title">{formattedTitle}</p>
                        {renderArtistName()}
                    </div>
                </div>
                <div className="card-thrid-row">
                    <Link to={`/album/${id}`} className="dark-button">See more</Link>
                    <ButtonComponent text="Go to Apple Music" link={link} />
                </div>
            </div>
        </li>
    )
};

export default connect(null, { updateFavorite })(CardComponent);