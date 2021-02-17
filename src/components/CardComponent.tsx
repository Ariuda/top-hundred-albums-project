import React from 'react';

import { Album } from '../entities';
import ButtonComponent from './ButtonComponent';
import { limitCharacters } from '../helpers/helpers';


const CardComponent: React.FC<Album> = ({ image, title, artist }) => {
    const formattedTitle = limitCharacters(title);
    const formattedArtistName = limitCharacters(artist.name);
    return (
        <li className="card-container col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="card">
                <div className="card-first-row">
                    <img src={image} alt={title} />
                    <div className="card-text">
                        <p className="album-title">{formattedTitle}</p>
                        <p className="artist-name">By {formattedArtistName}</p>
                    </div>
                </div>
                <div className="card-second-row">
                    <ButtonComponent text="Play in AppleMusic" />
                </div>
            </div>
        </li>
    )
};

export default CardComponent;