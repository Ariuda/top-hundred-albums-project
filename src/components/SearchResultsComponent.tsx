import React from 'react';
import { Link } from 'react-router-dom';
import { Album } from '../entities';

interface Props {
    results: Album[];
    onClick: () => void;
}

export const SearchResultsComponent: React.FC<Props> = ({ results, onClick }) => {

    const renderResults = () => {
        if (results.length > 0) {
            return results.map(result => {
                return <li key={result.id} onClick={onClick}><Link to={`/album/${result.id}`}>{result.title}, by {result.artist.name} - {result.category.name}</Link></li>
            });
        };
        return <li className="no-result">Your search did not match any results</li>;
    }

    return (
        <ul>
            {renderResults()}
        </ul>
    )
};

export default SearchResultsComponent;