import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../store/reducers';
import dayjs from 'dayjs';

import { APIAuthor } from '../entities';

interface Props {
    APIAuthorDetails: APIAuthor
}

export const Footer: React.FC<Props> = ({ APIAuthorDetails }) => {
    const { lastUpdated, link, name, rights, title } = APIAuthorDetails;

    if(lastUpdated && link && name && rights && title) {
        return (
            <footer className="footer">
                <div className="container">
                    <p>Powered by {title}, {rights}</p>
                    <p>Last updated on {dayjs(lastUpdated).format('DD-MM-YYYY [at] HH:mm:ss')}</p>
                    <p>You can visit the {name} by <a href={link} target="_blank">clicking here</a></p>
                </div>
            </footer>
        )
    } 
    return null;
};

const mapStateToProps = (state: RootState) => {
    return {
        APIAuthorDetails: state.albumsState.APIAuthor
    }
}

export default connect(mapStateToProps)(Footer);