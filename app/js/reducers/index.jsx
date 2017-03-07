import { combineReducers } from 'redux';
import InfosReducer from './reducer_infos.jsx';
import HeadsReducer from './reducer_heads.jsx';
import ActiveIssue from './reducer_active.jsx';

const rootReducer = combineReducers({
  InfosReducer,
  HeadsReducer,
  ActiveIssue
});

export default rootReducer;
