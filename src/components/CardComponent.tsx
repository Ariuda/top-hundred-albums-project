import React from 'react';

import { Album } from '../entities';
import ButtonComponent from './ButtonComponent';
import { limitCharacters } from '../helpers/helpers';
import { Link } from 'react-router-dom';


const CardComponent: React.FC<Album> = ({ image, title, artist, category, index, id, link }) => {
    const formattedTitle = limitCharacters(title);
    const formattedArtistName = limitCharacters(artist.name);

    const renderArtistName = () => {
        if (artist.link) {
            return <a href={artist.link} target="_blank" rel="noreferrer" className="artist-name">{formattedArtistName}</a>
        }
        return <p className="artist-name">{formattedArtistName}</p>;
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

export default CardComponent;