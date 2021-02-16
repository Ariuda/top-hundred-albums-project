import React from 'react';

import { Album } from '../entities';
import ButtonComponent from './ButtonComponent';


const CardComponent: React.FC<Album> = ({ image, title, artist }) => {
    return (
        <li className="card-container col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="card">
                <img src={image} alt={title} />
                <div className="card-text">
                    <p className="album-title">{title}</p>
                    <p className="artist-name">{artist.name}</p>
                    <ButtonComponent text="Play in AppleMusic" />
                </div>
            </div>
        </li>
    )
};

export default CardComponent;