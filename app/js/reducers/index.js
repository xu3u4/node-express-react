import { combineReducers } from 'redux';
import IssuesReducer from './reducer_issues.js';
import HeadsReducer from './reducer_heads.js';
import ActiveReducer from './reducer_active.js';

const rootReducer = combineReducers({
  IssuesReducer,
  HeadsReducer,
  ActiveReducer
});

export default rootReducer;
