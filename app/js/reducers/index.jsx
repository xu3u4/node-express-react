import { combineReducers } from 'redux';
import IssuesReducer from './reducer_issues.jsx';
import HeadsReducer from './reducer_heads.jsx';
import ActiveReducer from './reducer_active.jsx';

const rootReducer = combineReducers({
  IssuesReducer,
  HeadsReducer,
  ActiveReducer
});

export default rootReducer;
