import React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../store/reducers';
import { Album } from '../entities';
import { FiltersState } from '../store/reducers/filtersReducer';
import { fetchAlbums } from '../store/action-creators/albumsActions';
import CardComponent from '../components/CardComponent';
import PaginationComponent from '../components/PaginationComponent';
import { getVisibleAlbums } from '../filterSelectors/paginationFilters';
import ButtonComponent from '../components/ButtonComponent';
import LoadingComponent from '../components/LoadingComponent';
import { scrollTo } from '../helpers/helpers';

interface Props {
    albums: Album[];
    filters: FiltersState;
}

interface DispatchProps {
    fetchAlbums: () => void;
}

interface State {
    error: string;
    observer: IntersectionObserver | null;
    scrollObserver: React.RefObject<HTMLDivElement>;
    backToTop: boolean;
}

type AlbumListProps = Props & DispatchProps;

class AlbumsList extends React.Component<AlbumListProps, State> {
    state = {
        error: '',
        observer: null,
        scrollObserver: React.createRef<HTMLDivElement>(),
        backToTop: false,
    };
    async componentDidMount() {
        try {
            await this.props.fetchAlbums();
        } catch (error) {
            console.error(error.message);
            this.setState({ error: error.message });
        }

        if (this.state.scrollObserver.current) {
            const scrollingObserver = (entries: any[]) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    this.setState({ backToTop: true });
                } else {
                    this.setState({ backToTop: false });
                }
            };

            this.setState({
                observer: new IntersectionObserver(scrollingObserver, {
                    root: null,
                    threshold: 0,
                    rootMargin: '200px',
                }),
            });

            if (this.state.observer) {
                (this.state.observer as unknown as any).observe(this.state.scrollObserver.current);
            }
        }
    }

    componentWillUnmount() {
      if (this.state.observer) {
        (this.state.observer as unknown as any).unobserve(this.state.scrollObserver.current);
      }
    }

    backToTop = () => {
        const title = document.querySelector('h1');
        scrollTo(title as HTMLElement);
    };

    renderAlbums = () => {
        return this.props.albums.map((album) => {
            return <CardComponent {...album} key={album.id} />;
        });
    };

    render() {
        const { albums } = this.props;
        if (albums) {
            if (albums.length > 0) {
                return (
                    <div className="albums-list-container">
                        <h1>Top 100 albums in the iTunes Store</h1>
                        <ul className="albums-list row">{this.renderAlbums()}</ul>
                        <div ref={this.state.scrollObserver}>
                            <PaginationComponent />
                        </div>
                        <ButtonComponent
                            className={`back-to-top ${this.state.backToTop ? 'active' : ''}`}
                            onClick={this.backToTop}
                        />
                    </div>
                );
            }
        }

        if (!!this.state.error) {
            return (
                <div className="not-found">
                    <h1>Top 100 albums in the iTunes Store</h1>
                    <div className="not-found-card">
                        <p>{this.state.error}</p>
                    </div>
                </div>
            );
        }

        return <LoadingComponent />
    }
}

const mapStateToProps = (state: RootState): Props => {
    return {
        albums: getVisibleAlbums(
            state.albumsState.albums,
            state.filtersState.page,
            state.filtersState.maxResultsPerPage
        ),
        filters: state.filtersState,
    };
};

export default connect(mapStateToProps, { fetchAlbums })(AlbumsList);
