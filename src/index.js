import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

import Store from './stores';

const store = new Store("blythe", "early");

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
