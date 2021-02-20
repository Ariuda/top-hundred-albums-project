import React from 'react';

import { Album } from '../entities';
import ButtonComponent from './ButtonComponent';
import { limitCharacters } from '../helpers/helpers';


const CardComponent: React.FC<Album> = ({ image, title, artist, price, category, index }) => {
    const formattedTitle = limitCharacters(title);
    const formattedArtistName = limitCharacters(artist.name);

    const renderArtistName = () => {
        if (artist.link) {
            return <p className="artist-name">By <a href={artist.link} target="_blank" rel="noreferrer">{formattedArtistName}</a></p>
        }
        return <p className="artist-name">By {formattedArtistName}</p>;
    };
    return (
        <li className="card-container col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="card">
                <div className="card-top-row row">
                    <div className="col-6">
                        <a href={category.link} target="_blank" rel="noreferrer">{category.name}</a>
                    </div>
                    <div className="col-6">
                        Top #{index}
                    </div>
                </div>
                <div className="card-second-row">
                    <img src={image} alt={title} />
                    <div className="card-text">
                        <p className="album-title">{formattedTitle}</p>
                        {renderArtistName()}
                        <p className="price">{price}</p>
                    </div>
                </div>
                <div className="card-thrid-row">
                    <ButtonComponent text="Play in AppleMusic" />
                </div>
            </div>
        </li>
    )
};

export default CardComponent;