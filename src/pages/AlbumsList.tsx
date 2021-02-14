import React from 'react';
import { connect } from 'react-redux';

import { fetchAlbums } from '../store/action-creators';

interface Props {
    fetchAlbums: () => void;
}

class AlbumsList extends React.Component<Props> {
  componentDidMount() {
      this.props.fetchAlbums();
  }

  
  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

export default connect(null, { fetchAlbums })(AlbumsList);