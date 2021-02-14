import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Router, Switch, Route } from 'react-router-dom';

import history from './history';
import AlbumsList from './pages/AlbumsList';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={AlbumsList} />
          </Switch>
        </Router>
      </div>
    </Provider>
  )
};

export default App;


