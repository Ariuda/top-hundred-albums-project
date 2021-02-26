import React from 'react';
import { connect } from 'react-redux';

import TextInputComponent from './TextInputComponent';
import { filterBySearch } from '../filterSelectors/searchFilters';
import { RootState } from '../store/reducers';
import { Album } from '../entities';
import SearchResultsComponent from './SearchResultsComponent';

interface Props {
    albums: Album[];
}

interface State {
    term: string;
    wrapperRef: React.RefObject<HTMLDivElement>;
}

export class Nav extends React.Component<Props, State> {
    state = { 
        term: '',
        wrapperRef: React.createRef<HTMLDivElement>()
    }

    componentDidMount() {
        const body = document.querySelector('body') as HTMLBodyElement;
        body.addEventListener('click', this.handleClickOutsideSearchResults);
    };

    handleClickOutsideSearchResults = (e: MouseEvent) => {
        if (this.state.term != '' && this.state.wrapperRef.current) {
            if (!this.state.wrapperRef.current.contains(e.target as HTMLDivElement)) {
                 this.clearSearchTerm();
            }    
        }
    }

    clearSearchTerm = () => {
        this.setState({ term: '' });
    };

    onTermChange = (e: any) => {
        const term = e.target.value;
        this.setState({ term });
    }

    render() {
        if(this.props.albums.length > 0) {
            return (
                <nav>
                    <div>
                        <TextInputComponent value={this.state.term} placeholder="Type a name of an artist, album or category" onChange={(e) => this.onTermChange(e)} />
                        {this.state.term !== '' && <div ref={this.state.wrapperRef} className="search-results">
                            <SearchResultsComponent results={filterBySearch(this.state.term ,this.props.albums)} onClick={this.clearSearchTerm} />
                        </div>}
                    </div>
                </nav>
            )
        }
        return null;
    }
    
};

const mapStateToProps = (state: RootState) => {
    return {
        albums: state.albumsState.albums
    }
};

export default connect(mapStateToProps)(Nav);