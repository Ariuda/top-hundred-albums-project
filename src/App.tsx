import Root from './Root';

import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from './history';
import Nav from './components/Nav';
import AlbumsList from './pages/AlbumsList';
import AlbumsDeatil from './pages/AlbumsDetail';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Root>
      <div className="container">
        <Router history={history}>
          <Nav />
          <Switch>
            <Route path="/" exact component={AlbumsList} />
            <Route path="/album/:id" component={AlbumsDeatil} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </Root>
  )
};

export default App;


