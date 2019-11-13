import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Mark0Demo from './mark-0/demo';
import Mark1Demo from './mark-1/demo';
import Mark2Demo from './mark-2/demo';
import Mark3Demo from './mark-3/demo';

import { defineCustomElements } from '@ionic/core/loader';

import './index.css';

const routing = (
  <Router>
    <div>
      <nav>
        <Link to="/mark-0">Mark 0</Link>
        |
        <Link to="/mark-1">Mark 1</Link>
        |
        <Link to="/mark-2">Mark 2</Link>
        |
        <Link to="/mark-3">Mark 3</Link>
      </nav>
      <React.StrictMode>
        <Route path="/mark-0" component={Mark0Demo} />
        <Route path="/mark-1" component={Mark1Demo} />
        <Route path="/mark-2" component={Mark2Demo} />
        <Route path="/mark-3" component={Mark3Demo} />
      </React.StrictMode>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

defineCustomElements(window);