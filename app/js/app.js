import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import TableFrame from './components/table_frame';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <TableFrame />
  </Provider>,
  document.getElementById('app')
);
