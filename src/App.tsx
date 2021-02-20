import Root from './Root';

import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from './history';
import AlbumsList from './pages/AlbumsList';

const App: React.FC = () => {
  return (
    <Root>
      <div className="container">
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={AlbumsList} />
          </Switch>
        </Router>
      </div>
    </Root>
  )
};

export default App;


