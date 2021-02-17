import React from 'react';

import { connect } from 'react-redux';
import { FiltersState } from '../store/reducers/filtersReducer';
import { AlbumsState } from '../store/reducers/albumsReducer';
import { updateCurrentPage } from '../store/action-creators/filtersActions';
import { RootState } from '../store/reducers';

interface Props {
    filters: FiltersState,
    albums: AlbumsState
}

interface DispatchProps {
    updateCurrentPage: (goTo: number) => void;
}

type PaginationProps = Props & DispatchProps;

const PaginationComponent: React.FC<PaginationProps> = ({ filters, updateCurrentPage, albums }) => {
    const changePage = (goTo: number) => {
        updateCurrentPage(goTo);
    };
    const { page, maxResultsPerPage } = filters;
    
    return (
        <div className="pagination-component row">
            <div className="col-3">
                {page !== 0 && <button onClick={(e) => changePage(- 1)}>Prev</button>}
            </div>
            <div className="col-6">
                Page {page + 1}
            </div>
            <div className="col-3">
            {Math.floor(albums.albums.length / maxResultsPerPage) > page && <button onClick={(e) => changePage(1)}>Next</button>}
            </div>
        </div>
    )
};

const mapStateToProps = (state: RootState): Props => {
    return {
        filters: state.filtersState,
        albums: state.albumsState
    }
}


export default connect(mapStateToProps, { updateCurrentPage })(PaginationComponent);