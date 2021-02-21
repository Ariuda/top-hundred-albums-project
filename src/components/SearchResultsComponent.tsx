import React from 'react';
import { Link } from 'react-router-dom';
import { Album } from '../entities';

interface Props {
    results: Album[];
    onClick: () => void;
}

const SearchResultsComponent: React.FC<Props> = ({ results, onClick }) => {

    const renderResults = () => {
        if (results.length > 0) {
            return results.map(result => {
                return <li key={result.id} onClick={onClick}><Link to={`/${result.id}`}>{result.title}</Link></li>
            });
        };
        return 'Your search did not match any results';
    }

    return (
        <ul>
            {renderResults()}
        </ul>
    )
};

export default SearchResultsComponent;