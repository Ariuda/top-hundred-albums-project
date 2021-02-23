import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../store/reducers';

import { APIAuthor } from '../entities';

interface Props {
    APIAuthorDetails: APIAuthor
}

const Footer: React.FC<Props> = ({ APIAuthorDetails }) => {
    return (
        <footer>
            <div className="container">
                <p>Powered by {APIAuthorDetails.title}, {APIAuthorDetails.rights}</p>
                <p>Last updated on {APIAuthorDetails.lastUpdated}</p>
                <p>You can visit the {APIAuthorDetails.name} by <a href={APIAuthorDetails.link} target="_blank">clicking here</a></p>
            </div>
        </footer>
    )
};

const mapStateToProps = (state: RootState) => {
    return {
        APIAuthorDetails: state.albumsState.APIAuthor
    }
}

export default connect(mapStateToProps)(Footer);