import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/index.jsx';
import TableFrame from './containers/table_frame.jsx';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <TableFrame />
  </Provider>,
  document.getElementById('app')
);
