import React from 'react';

import { connect } from 'react-redux';
import { FiltersState } from '../store/reducers/filtersReducer';
import { Album } from '../entities';
import { updateCurrentPage } from '../store/action-creators/filtersActions';
import { RootState } from '../store/reducers';
import ButtonComponent from './ButtonComponent';

interface Props {
    filters: FiltersState;
    albums: Album[]
}

interface DispatchProps {
    updateCurrentPage: (goTo: number) => void;
}

type PaginationProps = Props & DispatchProps;

const PaginationComponent: React.FC<PaginationProps> = ({ filters, updateCurrentPage, albums }) => {
    const { page, maxResultsPerPage } = filters;
    const numOfPages = Math.ceil(albums.length / maxResultsPerPage);

    const changePage = (goTo: number) => {
        updateCurrentPage(goTo);
    };

    const prevPage = () => {
        if (page === 0 || numOfPages === 0) return;

        return (
            <ButtonComponent onClick={(e) => changePage(- 1)} text="Prev" className="pagination-prev" />
        )
    };

    const nextPage = () => {
        if (page === numOfPages - 1) return;

        return <ButtonComponent onClick={(e) => changePage(1)} text="Next" className="pagination-next" />;
    };
    
    return (
        <div className="pagination-component row">
            <div className="col-md-3 col-4">
                {prevPage()}
            </div>
            <div className="col-md-6 col-4 page">
                Page {page + 1}
            </div>
            <div className="col-md-3 col-4">
                {nextPage()}
            </div>
        </div>
    )
};

const mapStateToProps = (state: RootState): Props => {
    return {
        filters: state.filtersState,
        albums: state.albumsState.albums
    }
}


export default connect(mapStateToProps, { updateCurrentPage })(PaginationComponent);
